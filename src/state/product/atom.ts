import { atom } from "recoil";

import { START_PAGE } from "../../constants/product";
import { ProductsAtom } from "./type";

export const searchWordState = atom({
  key: "search",
  default: "",
});

export const pageState = atom({
  key: "page",
  default: START_PAGE,
});

export const productsState = atom<ProductsAtom | null>({
  key: "products",
  default: null,
});
