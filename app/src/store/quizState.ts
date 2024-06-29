import { atomFamily, selector } from "recoil";
import { useApi } from "../hooks/useApi";
import { Quiz } from "../types/api/quiz";

export const QuizState = atomFamily<Quiz | any, { id: string | any }>({
  key: "QuizState",
  default: ({ id }: string | any) =>
    selector({
      key: "QuizQuery",
      get: async ({ get }) => {
        try {
          const response = await useApi.get<Quiz>(`/quizzes/${id}`);
          return response.data.data;
        } catch (error) {
          throw error;
        }
      },
    }),
});
