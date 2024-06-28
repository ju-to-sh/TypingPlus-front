import { atom, selector } from "recoil";
import { useApi } from "../hooks/useApi";
import { Quiz } from "../types/api/quiz";

export const QuizState = atom<Quiz | any>({
  key: "QuizState",
  default: selector({
    key: "QuizQuery",
    get: async ({ get }) => {
      try {
        const response = await useApi.get<Quiz>("/quizzes/1");
        // return { quiz: response.data.data, quizChoice: response.data.included };
        return response.data.data;
      } catch (error) {
        throw error;
      }
    },
  }),
});
