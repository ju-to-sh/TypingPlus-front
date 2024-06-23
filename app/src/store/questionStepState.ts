import { atom } from "recoil";

export const questionStepState = atom<number>({
  key: 'questionStepState',
  default: 0
});
