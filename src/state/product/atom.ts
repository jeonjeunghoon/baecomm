import { atom } from "recoil";

export const searchWordState = atom({
  key: "search",
  default: "",
});

export const START_PAGE = 0;

export const pageState = atom({
  key: "page",
  default: START_PAGE,
});
