import { atomFamily, selectorFamily } from "recoil";
import { useApi } from "../hooks/useApi";
import { TypingData } from "../types/api/typing";

export const typingQuery = selectorFamily({
  key: "TypingQuery",
  get: (id: string) => async () => {
    try {
      const response = await useApi.get(`/typing_games/${id}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
});

export const typingState = atomFamily<Array<TypingData>, string>({
  key: "TypingState",
  default: (id: string) => typingQuery(id),
});
