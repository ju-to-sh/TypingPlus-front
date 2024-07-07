import { FC, memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { typingState } from "../../../store/typingState";
import { typingInfoState } from "../../../store/typingInfoState";
import { Button, Grid, Typography } from "@mui/material";
import { questionStepState } from "../../../store/questionStepState";

export const TypingQuestion: FC = memo(() => {
  const navigate = useNavigate();
  const param = useParams();
  const typingGames = useRecoilValue(typingState({ id: param.id }));
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingString, setTypingString] = useState(typingGames[questionIndex]);
  const [typingInfo, setTypingInfo] = useRecoilState(typingInfoState);
  const [inputValue, setInputValue] = useState("");
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
  console.log(typingString.attributes.content[currentIndex]);
  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (questionIndex === 4) {
      navigate("/typing_results/:id");
    }
    let inputkey = ChangeKey(e);

    if (inputkey === typingString.attributes.content[currentIndex]) {
      setTypingInfo((prev) => ({
        ...prev,
        isMissType: false,
      }));
      setCurrentIndex(currentIndex + inputkey.length);
      if (currentIndex + 1 >= typingString.attributes.content.length) {
        setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
        setQuestionIndex((prev) => prev + 1);
        setCurrentIndex(0);
        alert(`ミスタイプ：${typingInfo.missCount}`);
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
  };

  useEffect(() => {
    setTypingString(typingGames[questionIndex]);
  }, [questionIndex, typingGames]);
  return (
    <>
      <Grid item width="100%" minHeight="200px" textAlign="left" bgcolor="#F1938C" color="#fff" p={4} fontSize={{ xs: "16px", md: "18px" }} mb={5}>
        <div onKeyDown={(e) => handleKey(e)} tabIndex={0}>
          <Typography component="div" display="inline" color="green" sx={{ whiteSpace: "pre-wrap" }}>
            {typingString.attributes.content.slice(0, currentIndex)}
          </Typography>
          {typingInfo.isMissType ? (
            <Typography display="inline" color="red">
              {typingString.attributes.content[currentIndex]}
            </Typography>
          ) : (
            <Typography display="inline" color="black">
              {typingString.attributes.content[currentIndex].replace(/\n/g, "↵").replace(/\t/g, "→")}
            </Typography>
          )}
          <Typography component="div" display="inline" sx={{ whiteSpace: "pre-wrap" }}>
            {typingString.attributes.content.slice(currentIndex + 1, typingString.attributes.content.length)}
          </Typography>
        </div>
      </Grid>
      <Button variant="contained" color="primary" onClick={ResetAll}>
        やり直す
      </Button>
    </>
  );
});
