import { atom } from "recoil";

export const flashState = atom<boolean>({
  key: 'flashState',
  default: false
});
