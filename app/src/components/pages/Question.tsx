import { FC, memo, useState } from "react";
import { LinearStepper } from "../organisms/common/LinearStepper";
import { Box, Button, Grid } from "@mui/material";
import { QuestionButton } from "../molecules/QuestionButton";
import { useRecoilValue } from "recoil";
import { QuizState } from "../../store/quizState";
import { QuizChoiceAttributes } from "../../types/api/quiz";

export const Question: FC = memo(() => {
  const quizState = useRecoilValue(QuizState);
  const [quizIndex, setQuizIndex] = useState(0);

  const handleQuizIndexChange = (newNumber: number) => setQuizIndex(newNumber);
  console.log(quizIndex);
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
          {quizState[quizIndex].attributes.quiz_choices.map((choice: QuizChoiceAttributes, index: number) => (
            <Button
              key={index}
              size="large"
              variant="contained"
              color="secondary"
              sx={{
                marginRight: "24px",
                marginBottom: "16px",
                borderRadius: "0px",
                boxShadow: "none",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#F1938C",
                },
                textAlign: "left",
              }}
            >
              {`${index + 1}: ${choice.content}`}
            </Button>
          ))}
        </Grid>
        <Grid item xs={10} textAlign="center">
          <QuestionButton quizIndex={quizIndex} setQuizIndex={handleQuizIndexChange} />
        </Grid>
      </Grid>
    </Box>
  );
});
