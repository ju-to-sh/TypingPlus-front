import { atom, selector } from "recoil";
import { useApi } from "../hooks/useApi";
import { User } from "../types/api/user";

export const userInfoState = atom<User | any>({
  key: "userInfoState",
  default: selector({
    key: "userQuery",
    get: async ({ get }) => {
      try {
        const response = await useApi.get<User>("/user");
        return response.data.data.attributes;
      } catch (error) {
        throw error;
      }
    },
  }),
});
