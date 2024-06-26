import { atom, selector } from "recoil";
import { useApi } from "../hooks/useApi";
import { GameLists } from "../types/api/gameList";

export const gameListState = atom<GameLists | any>({
  key: "gameListState",
  default: selector({
    key: "gameListQuery",
    get: async ({ get }) => {
      try {
        const response = await useApi.get<GameLists>("/game_lists")
        return response.data.data;
      } catch (error) {
        throw error;
      }
    },
  }),
});
