import { useEffect, useState } from "react";

import { Product } from "../../types/products";
import { http } from "../../api/http";
import { DOMAIN_URL } from "../../constants/url";

type ProductsResponse = {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
};

const PER_COUNT = 10;

const START_PAGE = 0;

export const useProducts = () => {
  const [page, setPage] = useState(START_PAGE);
  const [products, setProducts] = useState<Product[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasNext, setHasNext] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsFetching(true);
        const data = await http.get<ProductsResponse>(
          `${DOMAIN_URL}/products?limit=10&skip=${
            page * PER_COUNT
          }&select=thumbnail,brand,title,price`
        );

        setProducts([...products, ...data.products]);
        setHasNext(products.length + PER_COUNT < data.total);
        setIsFetching(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [page]);

  const showMoreProducts = async () => {
    if (isFetching || !hasNext) return;

    setPage(page + 1);
  };

  return { products, hasNext, showMoreProducts };
};
