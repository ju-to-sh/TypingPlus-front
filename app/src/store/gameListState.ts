import { atomFamily, selector } from "recoil";
import { useApi } from "../hooks/useApi";
import { GameLists } from "../types/api/gameList";

export const gameListState = atomFamily<GameLists | any, { path: string | any }>({
  key: "gameListState",
  default: ({ path }: string | any) =>
    selector({
      key: "gameListQuery",
      get: async ({ get }) => {
        try {
          const response = await useApi.get<GameLists>(`${path}`);
          console.log(path)
          return response.data.data;
        } catch (error) {
          throw error;
        }
      },
    }),
});
