import { FC, memo, useState } from "react";
import { LinearStepper } from "../organisms/common/LinearStepper";
import { Box, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { QuestionButton } from "../molecules/QuestionButton";
import { useRecoilValue } from "recoil";
import { QuizState } from "../../store/quizState";
import { Answer, QuizChoiceAttributes } from "../../types/api/quiz";
import { useParams } from "react-router-dom";

export const Question: FC = memo(() => {
  const param = useParams();
  const quizState = useRecoilValue(QuizState({ id: param.id }));
  const [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<Answer>>([]);
  const [value, setValue] = useState("");

  const handleQuizIndexChange = (newNumber: number) => setQuizIndex(newNumber);

  const SelectAnswer = (e: any) => {
    const updatedAnswers = [...answers];
    const questionId = quizState[quizIndex].id;

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
  console.log(answers);
  console.log(value);
  return (
    <Box sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <Grid container direction="row" sx={{ minWidth: 600, maxWidth: 1000 }} margin="0 auto" justifyContent="center" alignItems="center" p={3}>
        <Grid item xs={8} textAlign="center" mb={5}>
          <LinearStepper />
        </Grid>
        <Grid item width="100%" minHeight="200px" textAlign="left" bgcolor="#F1938C" color="#fff" p={4} fontSize={{ xs: "16px", md: "18px" }} mb={5}>
          <pre style={{ whiteSpace: "pre-wrap" }}>{quizState[quizIndex].attributes.content}</pre>
        </Grid>
        <Grid item xs={12} textAlign="center" pb={5}>
          <FormControl>
            <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={value} onChange={handleRadioChange}>
              {quizState[quizIndex].attributes.quiz_choices.map((choice: QuizChoiceAttributes, index: any) => (
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
          <QuestionButton quizIndex={quizIndex} setQuizIndex={handleQuizIndexChange} setValue={setValue} answers={answers} />
        </Grid>
      </Grid>
    </Box>
  );
});
