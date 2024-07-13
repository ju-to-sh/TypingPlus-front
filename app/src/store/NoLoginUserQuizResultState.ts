import { atom } from "recoil";

export const NoLoginUserQuizResultState = atom<string | null>({
  key: "NoLoginUserQuizResultState",
  default: sessionStorage.getItem("quiz_results"),
});
