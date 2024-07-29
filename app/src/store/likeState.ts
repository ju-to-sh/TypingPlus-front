import { atom, selector } from "recoil";
import { useApi } from "../hooks/useApi";
import { GameLists, GameListsData } from "../types/api/gameList";

export const likeState = atom<Array<GameListsData>>({
  key: "likeState",
  default: [],
});

export const likeListIdsState = atom<Array<string>>({
  key: "likeListIdsState",
  default: [],
});

export const fetchLikeListIdsSelector = selector<Array<string>>({
  key: "fetchLikeListIdsSelector",
  get: async ({ get }) => {
    try {
      const response = await useApi.get<GameLists>("/likes");
      get(likeState)
      return response.data.data.map((data) => data.id);
    } catch (error) {
      throw error;
    }
  },
});

export const fetchLikeListsSelector = selector<Array<GameListsData>>({
  key: "fetchLikeListsSelector",
  get: async ({ get }) => {
    try {
      const response = await useApi.get<GameLists>("/likes");
      get(likeListIdsState)
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
});
