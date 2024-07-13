import { atomFamily, selectorFamily } from "recoil";
import { useApi } from "../hooks/useApi";
import { QuizData } from "../types/api/quiz";

export const quizQuery = selectorFamily({
  key: "quizQuery",
  get: (id: string) => async () => {
    try {
      const response = await useApi.get(`/quizzes/${id}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
});

export const QuizState = atomFamily<Array<QuizData>, string>({
  key: "QuizState",
  default: (id: string) => quizQuery(id),
});
