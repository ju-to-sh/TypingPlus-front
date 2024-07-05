import { atom } from "recoil";
import { TypingInfo } from "../types/api/typing";

export const typingInfoState = atom<TypingInfo>({
  key: 'typingInfoState',
  default: {
  isMissType: false,
  missCount: 0,
  finished: false
  }
});
