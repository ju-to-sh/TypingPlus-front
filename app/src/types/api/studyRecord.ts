import { QuizData } from "./quiz";
import { TypingResultData } from "./typing";

export type StudyRecord = {
  typing: Array<TypingResultData>;
  quiz: Array<QuizData>;
};
