import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Layout from "../../components/Layout";
import Product from "../../components/Product";
import Text from "../../components/common/Text";
import Image from "../../components/common/Image";

import { useProductDetail } from "./useProductDetail";

export default function ProductDetail() {
  const { pathname } = useLocation();
  const id = Number(pathname.split("/").pop());
  const { productDetail } = useProductDetail(id);

  if (!productDetail) return null;

  return (
    <Layout hasTitle={false} hasSearchBox={false} hasLink>
      <ProductDetailContainer>
        <Product
          thumbnail={productDetail.thumbnail}
          brand={productDetail.brand}
          title={productDetail.title}
          price={productDetail.price}
          size='large'
        />
        <Text>{productDetail.description}</Text>
        <Images>
          {productDetail.images.map((image, index) => {
            return (
              <li key={image}>
                <ImageWrapper>
                  <Image src={image} alt={`${productDetail.title}-${index}`} />
                </ImageWrapper>
              </li>
            );
          })}
        </Images>
      </ProductDetailContainer>
    </Layout>
  );
}

const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Images = styled.ul`
  display: flex;
  gap: 12px;
  padding: 12px 0;
  overflow: scroll;
`;

const ImageWrapper = styled.div`
  min-width: 200px;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
