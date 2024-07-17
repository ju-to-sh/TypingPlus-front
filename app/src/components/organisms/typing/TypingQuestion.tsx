import { FC, memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { typingState } from "../../../store/typingState";
import { typingInfoState } from "../../../store/typingInfoState";
import { Box, Button, Grid, Typography } from "@mui/material";
import { questionStepState } from "../../../store/questionStepState";
import { useStopwatch } from "react-timer-hook";
import { TypingData } from "../../../types/api/typing";
import { SuccessModal } from "./SuccessModal";
import { useApi } from "../../../hooks/useApi";

export const TypingQuestion: FC = memo(() => {
  const { id } = useParams();
  const [typingGames, setTypingGames] = useRecoilState(typingState(id as string));
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingString, setTypingString] = useState(typingGames[questionIndex]);
  const [typingInfo, setTypingInfo] = useRecoilState(typingInfoState);
  const [inputValue, setInputValue] = useState("");
  const [totalLength, setTotalLength] = useState(0);
  const { totalSeconds, isRunning, start, pause, reset } = useStopwatch();
  const [open, setOpen] = useState(false);
  const setActiveStep = useSetRecoilState(questionStepState);

  const ChangeKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    let newValue = inputValue;

    if (e.key === "Enter") {
      newValue = "\n";
    } else if (e.key === "Tab") {
      newValue = "\t";
    } else if (e.key.length === 1) {
      newValue = e.key;
    }
    setInputValue(newValue);
    return newValue;
  };

  const StringJudge = (string: string): boolean => {
    const regex = /[A-Z!@#$%^&*()~_+{}|:"<>?]/;
    if (string.match(regex)) {
      return true;
    } else {
      return false;
    }
  };

  const CPM = (seconds: number, length: number) => Math.round(length / (seconds / 60));
  const ScoreCalculate = (typeSpeed: number, missType: number) => Math.round(typeSpeed - missType * 0.5);

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    !isRunning && start();
    if (questionIndex === 4 && currentIndex + 1 >= typingString.attributes.content.length) {
      pause();
      const typingResult = {
        type_speed: CPM(totalSeconds, totalLength),
        miss_type: typingInfo.missCount,
        score: ScoreCalculate(CPM(totalSeconds, totalLength), typingInfo.missCount),
        game_list_id: Number(id),
      };
      useApi
        .post("/typing_game_results", { typing_game_result: typingResult })
        .then((res) => {
          sessionStorage.clear();
          sessionStorage.setItem("typing_game_results", JSON.stringify(res.data));
        })
        .catch((error) => console.log(error));
      setOpen(true);
      return;
    }
    let inputkey = ChangeKey(e);

    if (inputkey === typingString.attributes.content[currentIndex]) {
      setTypingInfo((prev) => ({
        ...prev,
        isMissType: false,
      }));
      setCurrentIndex(currentIndex + inputkey.length);
      if (currentIndex + 1 >= typingString.attributes.content.length) {
        pause();
        setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
        setQuestionIndex((prev) => prev + 1);
        setCurrentIndex(0);
      }
    } else {
      if (!StringJudge(typingString.attributes.content[currentIndex])) {
        setTypingInfo((prev) => ({
          ...prev,
          isMissType: true,
          missCount: prev.missCount + 1,
        }));
      } else {
        if (e.key !== "Shift")
          setTypingInfo((prev) => ({
            ...prev,
            isMissType: true,
            missCount: prev.missCount + 1,
          }));
      }
    }
  };

  const ResetAll = () => {
    setCurrentIndex(0);
    setQuestionIndex(0);
    setInputValue("");
    setActiveStep(0);
    setOpen(false);
    reset();
    isRunning && pause();
  };

  useEffect(() => {
    setTypingString(typingGames[questionIndex]);
  }, [questionIndex, typingGames]);

  useEffect(() => {
    let total: number = 0;
    typingGames.map((game: TypingData) => (total += game.attributes.content.length));
    setTotalLength(total);
  }, []);

  return (
    <>
      {questionIndex === 0 && (
        <Typography fontWeight="bold" fontSize="18px" component="div" display="inline" color="#c52f24">
          英文をクリックするとスタートできます
        </Typography>
      )}
      <Grid item width="100%" textAlign="left" bgcolor="#F1938C" color="#fff" p={4} mb={2}>
        <Box width="80%" onKeyDown={(e) => handleKey(e)} tabIndex={0} min-height="200px" sx={{ outline: "none", xs: "24px" }} m="0 auto">
          <Typography display="inline" sx={{ color: "#689f38", whiteSpace: "pre-wrap", fontSize: { xs: "24px", md: "28px" } }}>
            {typingString.attributes.content.slice(0, currentIndex)}
          </Typography>
          {typingInfo.isMissType ? (
            <Typography display="inline" color="red" sx={{ fontSize: { xs: "24px", md: "28px" }, backgroundColor: "#e0e0e0" }}>
              {typingString.attributes.content[currentIndex]}
            </Typography>
          ) : (
            <Typography display="inline" color="#333" sx={{ fontSize: { xs: "24px", md: "28px" }, backgroundColor: "#e0e0e0" }}>
              {typingString.attributes.content[currentIndex].replace(/\n/g, "↵").replace(/\t/g, "→")}
            </Typography>
          )}
          <Typography display="inline" sx={{ whiteSpace: "pre-wrap", fontSize: { xs: "24px", md: "28px" } }}>
            {typingString.attributes.content.slice(currentIndex + 1, typingString.attributes.content.length)}
          </Typography>
        </Box>
      </Grid>
      <Box width="100%" textAlign="center" mb={2}>
        <Typography>合計:{totalSeconds}</Typography>
      </Box>
      <Button variant="contained" color="primary" onClick={ResetAll}>
        やり直す
      </Button>
      <SuccessModal
        onClick={ResetAll}
        open={open}
        missType={typingInfo.missCount}
        speed={CPM(totalSeconds, totalLength)}
        score={ScoreCalculate(CPM(totalSeconds, totalLength), typingInfo.missCount)}
      />
    </>
  );
});
