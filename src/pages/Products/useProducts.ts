import { useEffect, useState } from "react";

import { Product } from "../../types/products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://dummyjson.com/products?limit=10&select=thumbnail,brand,title,price"
      );

      const data = await res.json();

      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return products;
};
