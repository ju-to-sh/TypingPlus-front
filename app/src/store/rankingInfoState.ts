import { selector } from "recoil";
import { useApi } from "../hooks/useApi";

export const rankingInfoState = selector({
  key: "rankingInfoState",
  get: async () => {
    try {
      const response = await useApi.get("/ranking");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});
