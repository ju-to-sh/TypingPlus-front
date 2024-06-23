import { FC, memo, useCallback, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { questionStepState } from "../../store/questionStepState";

const NumberOfQuestions = 5;

export const QuestionButton: FC = memo(() => {
  const [activeStep, setActiveStep] = useRecoilState(questionStepState);

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
        <Button variant="contained" color="primary" onClick={handleNext} component={RouterLink} to="/question_result">
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
