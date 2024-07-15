import { atomFamily, selectorFamily } from "recoil";
import { useApi } from "../hooks/useApi";
import { User } from "../types/api/user";

export const userInfoQuery = selectorFamily({
  key: "userInfoQuery",
  get: (id: string) => async () => {
    try {
      const response = await useApi.get<User>(`/users/${id}`);
      return response.data.data.attributes;
    } catch (error) {
      throw error;
    }
  },
});

export const userInfoState = atomFamily<any, string>({
  key: "userInfoState",
  default: (id: string) => userInfoQuery(id),
});
