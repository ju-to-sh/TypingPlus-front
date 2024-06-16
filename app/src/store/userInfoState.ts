import { selector } from "recoil";
import { useApi } from "../hooks/useApi";
import { User } from "../types/api/user";

export const userInfoState = selector({
  key: "userInfoState",
  get: async ({ get }) => {
    try {
      const response = await useApi.get<User>("/users/1");
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
});
