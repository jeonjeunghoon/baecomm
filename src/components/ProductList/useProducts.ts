import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { pageState, productsState, searchWordState } from "../../state";
import { useFetch } from "../../hooks/useFetch";
import { http } from "../../api/http";
import {
  GENERATE_PRODUCTS_URL,
  GENERATE_SEARCH_URL,
} from "../../constants/url";
import { Product } from "../../types/products";
import { START_PAGE } from "../../constants/product";

type ProductsResponse = {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
};

export const useProducts = () => {
  const [products, setProducts] = useRecoilState(productsState);
  const [page, setPage] = useRecoilState(pageState);
  const [searchWord, setSearchWord] = useRecoilState(searchWordState);
  const url = searchWord
    ? GENERATE_SEARCH_URL(searchWord, page)
    : GENERATE_PRODUCTS_URL(page);
  const isSearched = products ? products.searchWord !== searchWord : false;
  const { data, isLoading } = useFetch({
    fetch: () => http.get<ProductsResponse>(url),
    key: url,
    suspense: !products || isSearched,
  });

  const hasNext = products && products.products.length < products.total;

  const fetchNextPage = () => {
    if (!hasNext || isLoading) return;

    setPage((page) => page + 1);
  };

  const reset = () => {
    setPage(START_PAGE);
    setSearchWord("");
  };

  useEffect(() => {
    if (!data || isLoading) return;

    setProducts({
      url,
      products: data.products,
      page,
      searchWord: searchWord,
      total: data.total,
    });
  }, [data, isLoading, page, searchWord, url, setProducts]);

  return {
    products: products?.products,
    hasNext,
    isLoading,
    fetchNextPage,
    reset,
  };
};
