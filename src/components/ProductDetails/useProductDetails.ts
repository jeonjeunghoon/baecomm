import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { http } from "../../api/http";
import { DOMAIN_URL } from "../../constants/url";
import { ProductDetails } from "../../types/products";
import { useFetch } from "../../hooks/useFetch";
import { productDetailsState } from "../../state";

export const useProductDetails = (id: number) => {
  const [productDetails, setProductDetails] =
    useRecoilState(productDetailsState);
  const { data } = useFetch({
    fetch: () =>
      http.get<ProductDetails>(
        `${DOMAIN_URL}/products/${id}?select=thumbnail,brand,title,price,description,images`
      ),
    key: id,
    suspense: true,
    enable: !productDetails || (productDetails && productDetails.id !== id),
  });

  if (data && !data.id) throw new Error("잘못된 접근입니다.");

  useEffect(() => {
    if (!data) return;

    setProductDetails(data);
  }, [data, setProductDetails]);

  return { productDetails };
};
