import { atom, atomFamily, selectorFamily } from "recoil";
import { TypingInfo } from "../types/api/typing";
import { useApi } from "../hooks/useApi";

export const typingInfoState = atom<TypingInfo>({
  key: "typingInfoState",
  default: {
    isMissType: false,
    missCount: 0,
  },
});

export const typingResultState = atomFamily<any, any>({
  key: "typingResultState",
  default: {},
});

export const fetchtTypingResultSelector = selectorFamily({
  key: "fetchtTypingResultSelector",
  get: (id: string) => async () => {
    try {
      const response = await useApi.get(`/users/${id}/study_records`);
      return response.data;
    } catch (error) {
      console.error("Error fetching typing results:", error);
      throw error;
    }
  },
});
