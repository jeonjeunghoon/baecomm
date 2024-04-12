import { PER_COUNT } from "./product";

export const DOMAIN_URL = "https://dummyjson.com";

export const GENERATE_PRODUCTS_URL = (page: number) =>
  `${DOMAIN_URL}/products?limit=${
    (page + 1) * PER_COUNT
  }&select=thumbnail,brand,title,price`;

export const GENERATE_SEARCH_URL = (searchWord: string, page: number) =>
  `${DOMAIN_URL}/products/search?q=${searchWord}&limit=${
    (page + 1) * PER_COUNT
  }&select=thumbnail,brand,title,price`;
