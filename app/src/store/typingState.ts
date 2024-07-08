import { atomFamily, selector } from "recoil";
import { useApi } from "../hooks/useApi";
import { Typing } from "../types/api/typing";

export const typingState = atomFamily<Typing | any, { id: string | any }>({
  key: "TypingState",
  default: ({ id }: string | any) =>
    selector({
      key: "TypingQuery",
      get: async ({ get }) => {
        try {
          const response = await useApi.get<Typing>(`/typing_games/${id}`);
          return response.data.data;
        } catch (error) {
          throw error;
        }
      },
    }),
});
