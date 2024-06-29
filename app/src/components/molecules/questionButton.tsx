import { FC, memo, useCallback, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { questionStepState } from "../../store/questionStepState";

type Props = {
  setQuizIndex: (number: number) => void;
  quizIndex: number;
};

const NumberOfQuestions = 5;

export const QuestionButton: FC<Props> = memo((props) => {
  const { quizIndex, setQuizIndex } = props;
  const [activeStep, setActiveStep] = useRecoilState(questionStepState);
  const handleNext = () => {
    setQuizIndex(quizIndex + 1);
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  };
  const handleResult = () => setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  const handleBack = () => {
    setQuizIndex(quizIndex - 1);
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1)
  };
  const blockBrowserBack = useCallback(() => {
    window.history.go(1);
  }, []);

  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", blockBrowserBack);
    return () => {
      window.removeEventListener("popstate", blockBrowserBack);
    };
  }, [blockBrowserBack]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2, justifyContent: "flex-end" }}>
      <Button variant="contained" color="secondary" onClick={handleBack} disabled={activeStep === 0} sx={{ marginRight: "8px" }}>
        前
      </Button>
      {activeStep === NumberOfQuestions - 1 ? (
        <Button variant="contained" color="primary" onClick={handleResult} component={RouterLink} to="/question_result">
          結果を見る
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={handleNext}>
          次の問題
        </Button>
      )}
    </Box>
  );
});
