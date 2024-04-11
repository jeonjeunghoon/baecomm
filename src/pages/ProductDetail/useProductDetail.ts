import { useEffect, useState } from "react";

import { http } from "../../api/http";
import { DOMAIN_URL } from "../../constants/url";
import { ProductDetail } from "../../types/products";

export const useProductDetail = (id: number) => {
  const [productDetail, setProductDetail] = useState<ProductDetail>();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsFetching(true);
        const data = await http.get<ProductDetail>(
          `${DOMAIN_URL}/products/${id}?select=thumbnail,brand,title,price,description,images`
        );
        setProductDetail(data);
        setIsFetching(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [id]);

  return { productDetail, isFetching };
};
