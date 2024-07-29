import { atom, selector } from "recoil";
import { useApi } from "../hooks/useApi";
import { GameLists } from "../types/api/gameList";

export const likeState = atom<Array<string>>({
  key: "likeState",
  default: [],
});

export const fetchLikeListIdsSelector = selector<Array<string>>({
  key: "fetchLikeListIdsSelector",
  get: async () => {
    try {
      const response = await useApi.get<GameLists>("/likes");
      return response.data.data.map((data) => data.id);
    } catch (error) {
      throw error;
    }
  },
});
