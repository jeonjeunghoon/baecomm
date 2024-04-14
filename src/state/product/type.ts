import { Product } from "../../types/products";

export type ProductsAtom = {
  url: string;
  products: Product[];
  page: number;
  searchWord: string;
  total: number;
};
