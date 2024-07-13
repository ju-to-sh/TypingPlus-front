import { atomFamily, selectorFamily } from "recoil";
import { useApi } from "../hooks/useApi";
import { QuizResuls } from "../types/api/quiz";

export const quizResultQuery = selectorFamily<any, string>({
  key: "quizResultQuery",
  get: (id: string) => async () => {
    try {
      const response = await useApi.get<any>(`/quiz_results/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});

export const quizResultState = atomFamily<Array<QuizResuls>, string>({
  key: "quizResultState",
  default: (id: string) => quizResultQuery(id),
});
