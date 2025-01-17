import { atomFamily, selectorFamily, selector } from "recoil";
import { useApi } from "../hooks/useApi";
import { GameLists, GameListsData } from "../types/api/gameList";

export const gameListQuery = selectorFamily({
  key: "gameListQuery",
  get: (path: string) => async () => {
    try {
      const response = await useApi.get<GameLists>(`${path}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
});

export const gameListState = atomFamily<Array<GameListsData>, string>({
  key: "gameListState",
  default: (path: string) => gameListQuery(path),
});

export const gameListAllState = selector<Array<GameListsData>>({
  key: "gameListAllState",
  get: async () => {
    try {
      const response = await useApi.get<GameLists>("/search");
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
});
