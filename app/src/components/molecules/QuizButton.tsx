import { FC, memo, useCallback, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { questionStepState } from "../../store/questionStepState";
import { Answer } from "../../types/api/quiz";
import { useApi } from "../../hooks/useApi";
import _ from "lodash";

type Props = {
  setQuizIndex: (number: number) => void;
  quizIndex: number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  answers: Array<Answer>;
};

export const QuizButton: FC<Props> = memo((props) => {
  const NumberOfQuestions = 5;
  const { id } = useParams<string>();
  const { quizIndex, setQuizIndex, setValue, answers } = props;
  const setActiveStep = useSetRecoilState(questionStepState);

  const handleNext = () => {
    setQuizIndex(quizIndex + 1);
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    answers[quizIndex + 1] ? setValue(answers[quizIndex + 1].selectAnswer) : setValue("");
  };
  const handleResult = () => {
    const snakeCasedAnswers = answers.map((answer) => _.mapKeys(answer, (value, key: string) => _.snakeCase(key)));
    setActiveStep(0);
    useApi
      .post("/quiz_results", { quiz_result: snakeCasedAnswers })
      .then((res) => {
        sessionStorage.clear();
        sessionStorage.setItem("quiz_results", JSON.stringify(res.data[0]));
        if (res.data[0] !== 0) {
        }
      })
      .catch((error) => console.log(error));
  };
  const handleBack = () => {
    setQuizIndex(quizIndex - 1);
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
    setValue(answers[quizIndex - 1].selectAnswer);
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
      <Button variant="contained" color="secondary" onClick={handleBack} disabled={quizIndex === 0} sx={{ marginRight: "8px" }}>
        前
      </Button>
      {quizIndex === NumberOfQuestions - 1 ? (
        <Button variant="contained" color="primary" onClick={handleResult} component={RouterLink} to={`/quiz_results/${id}`}>
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
