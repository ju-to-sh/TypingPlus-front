import { atom, selector } from "recoil";
import { useApi } from "../hooks/useApi";
// import { User } from "../types/api/user";

export const quizResultState = atom<any>({
  key: "quizResultState",
  default: selector({
    key: "quizResultQuery",
    get: async ({ get }) => {
      try {
        const response = await useApi.get<any>("/quiz_results");
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  }),
});
