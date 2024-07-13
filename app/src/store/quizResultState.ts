import { atomFamily, selector } from "recoil";
import { useApi } from "../hooks/useApi";

export const quizResultState = atomFamily<any, any>({
  key: "quizResultState",
  default: (id: any) =>
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
