import { FC, memo } from "react";
import { QuizUserResult } from "../organisms/quiz/QuizUserResult";
import { QuizNoUserResult } from "../organisms/quiz/QuizNoUserResult";

export const QuestionResult: FC = memo(() => {
  const isValueSessionStorage = (key: string): boolean => {
    const value = sessionStorage.getItem(key);
    return value !== "undefined";
  };

  return isValueSessionStorage("quiz_results") ? <QuizNoUserResult /> : <QuizUserResult />;
});
