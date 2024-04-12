import { atom } from "recoil";

import { Product } from "../../types/products";
import { START_PAGE } from "../../constants/product";

export const searchWordState = atom({
  key: "search",
  default: "",
});

export const pageState = atom({
  key: "page",
  default: START_PAGE,
});

export const productsState = atom<Product[]>({
  key: "products",
  default: [],
});
