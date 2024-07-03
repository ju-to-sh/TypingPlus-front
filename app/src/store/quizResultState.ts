import { atomFamily, selector } from "recoil";
import { useApi } from "../hooks/useApi";
// import { User } from "../types/api/user";

export const quizResultState = atomFamily<any, { id: string | any }>({
  key: "quizResultState",
  default: ({ id }: string | any) =>
    selector({
      key: "quizResultQuery",
      get: async ({ get }) => {
        try {
          const response = await useApi.get<any>(`/quiz_results/${id}`);
          return response.data;
        } catch (error) {
          throw error;
        }
      },
    }),
});
