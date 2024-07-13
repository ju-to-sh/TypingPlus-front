import { FC, memo, useEffect, useState } from "react";
import { LinearStepper } from "../organisms/common/LinearStepper";
import { Box, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { QuizButton } from "../molecules/QuizButton";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { QuizState } from "../../store/quizState";
import { Answer, QuizChoiceAttributes } from "../../types/api/quiz";
import { useParams } from "react-router-dom";

export const Question: FC = memo(() => {
  const { id } = useParams<string>();
  const quiz = useRecoilValue(QuizState(id as string));
  const resetQuizState = useResetRecoilState(QuizState(id as string));
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Array<Answer>>([]);
  const [value, setValue] = useState<string>("");

  const handleQuizIndexChange = (newNumber: number) => setQuizIndex(newNumber);

  const SelectAnswer = (e: any) => {
    const updatedAnswers = [...answers];
    const questionId: string = quiz[quizIndex].id;
    const answerIndex = updatedAnswers.findIndex((answer) => answer.quizId === questionId);
    if (answerIndex !== -1) {
      updatedAnswers[answerIndex] = { quizId: questionId, selectAnswer: e.target.value };
    } else {
      updatedAnswers.push({ quizId: questionId, selectAnswer: e.target.value });
    }
    setAnswers(updatedAnswers);
  };

  const handleRadioChange = (e: any) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    resetQuizState();
  }, [id, resetQuizState]);
  return (
    <Box sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <Grid container direction="row" sx={{ minWidth: 600, maxWidth: 1000 }} margin="0 auto" justifyContent="center" alignItems="center" p={3}>
        <Grid item xs={8} textAlign="center" mb={5}>
          <LinearStepper />
        </Grid>
        <Grid item width="100%" minHeight="200px" textAlign="left" bgcolor="#F1938C" color="#fff" p={4} fontSize={{ xs: "16px", md: "18px" }} mb={5}>
          <pre style={{ whiteSpace: "pre-wrap" }}>{quiz[quizIndex].attributes.content}</pre>
        </Grid>
        <Grid item xs={12} textAlign="center" pb={5}>
          <FormControl>
            <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="quiz_result" value={value} onChange={handleRadioChange}>
              {quiz[quizIndex].attributes.quiz_choices.map((choice: QuizChoiceAttributes, index: any) => (
                <FormControlLabel
                  key={index}
                  sx={{
                    backgroundColor: "#eee",
                    pr: "15px",
                    "&:hover": {
                      backgroundColor: "#F1938C",
                    },
                    mb: "10px",
                  }}
                  value={index}
                  control={<Radio sx={{ pl: "15px" }} onClick={SelectAnswer} />}
                  label={choice.content}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={10} textAlign="center">
          <QuizButton quizIndex={quizIndex} setQuizIndex={handleQuizIndexChange} setValue={setValue} answers={answers} />
        </Grid>
      </Grid>
    </Box>
  );
});
