import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { pageState, productsState, searchWordState } from "../../state";
import { Product } from "../../types/products";
import { http } from "../../api/http";
import {
  GENERATE_PRODUCTS_URL,
  GENERATE_SEARCH_URL,
} from "../../constants/url";

type ProductsResponse = {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
};

export const useProducts = () => {
  const [products, setProducts] = useRecoilState(productsState);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [page, setPage] = useRecoilState(pageState);
  const searchWord = useRecoilValue(searchWordState);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsFetchingNextPage(true);

        const data = await http.get<ProductsResponse>(
          searchWord
            ? GENERATE_SEARCH_URL(searchWord, page)
            : GENERATE_PRODUCTS_URL(page)
        );

        setProducts(data.products);
        setHasNextPage(data.products.length < data.total);

        setIsFetchingNextPage(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [page, searchWord, setProducts]);

  const fetchNextPage = () => {
    if (isFetchingNextPage || !hasNextPage) return;

    setPage((page) => page + 1);
  };

  return { products, hasNextPage, isFetchingNextPage, fetchNextPage };
};
