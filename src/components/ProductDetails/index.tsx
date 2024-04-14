import styled from "styled-components";

import Product from "../Product";
import Text from "../common/Text";
import Image from "../common/Image";

import { useProductDetails } from "./useProductDetails";

type Props = {
  id: number;
};

export default function ProductDetails({ id }: Props) {
  const { productDetails } = useProductDetails(id);

  if (!productDetails) return null;

  return (
    <Container>
      <Product
        thumbnail={productDetails.thumbnail}
        brand={productDetails.brand}
        title={productDetails.title}
        price={productDetails.price}
        size='large'
      />
      <Text align='left'>{productDetails.description}</Text>
      <ImageList>
        {productDetails.images.map((image, index) => {
          return (
            <li key={image}>
              <ImageWrapper>
                <Image src={image} alt={`${productDetails.title}-${index}`} />
              </ImageWrapper>
            </li>
          );
        })}
      </ImageList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageList = styled.ul`
  display: flex;
  gap: 12px;
  margin-top: 40px;
  padding: 12px 0;
  overflow: scroll;
`;

const ImageWrapper = styled.div`
  min-width: 200px;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
