import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { START_PAGE, pageState, searchWordState } from "../../state";
import { Product } from "../../types/products";
import { http } from "../../api/http";
import { DOMAIN_URL } from "../../constants/url";

type ProductsResponse = {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
};

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [page, setPage] = useRecoilState(pageState);
  const searchWord = useRecoilValue(searchWordState);

  useEffect(() => {
    const fetchProducts = async () => {
      const PER_COUNT = 10;

      try {
        setIsFetching(true);
        const defaultQuery = `limit=10&skip=${
          page * PER_COUNT
        }&select=thumbnail,brand,title,price`;
        const data = await http.get<ProductsResponse>(
          `${DOMAIN_URL}/products${
            searchWord
              ? `/search?q=${searchWord}&${defaultQuery}`
              : `?${defaultQuery}`
          }`
        );

        if (searchWord && page === START_PAGE) {
          setProducts(data.products);
          setHasNext(data.products.length < data.total);
        } else {
          setProducts([...products, ...data.products]);
          setHasNext(products.length + data.products.length < data.total);
        }

        setIsFetching(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [page, searchWord]);

  const loadMoreProducts = () => {
    if (isFetching || !hasNext) return;

    setPage((page) => page + 1);
  };

  return { products, hasNext, isFetching, loadMoreProducts };
};
