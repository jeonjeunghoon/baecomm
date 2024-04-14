import styled from "styled-components";

import Error from "../Error";
import Product from "../Product";
import CustomLink from "../common/CustomLink";
import Button from "../common/Button";
import Text from "../common/Text";

import { useProducts } from "./useProducts";
import { MAX_WIDTH } from "../../styles/GlobalStyle";

export default function ProductList() {
  const { products, hasNext, isLoading, fetchNextPage, reset } = useProducts();

  if (!products) return null;

  if (!products.length)
    return (
      <Error
        title='상품이 없어요'
        label='홈으로 돌아가기'
        handleButtonClick={reset}
      />
    );

  return (
    <>
      <Container>
        {products.map(({ id, thumbnail, brand, title, price }) => {
          return (
            <li key={id}>
              <CustomLink to={`${id}`}>
                <Product
                  thumbnail={thumbnail}
                  brand={brand}
                  title={title}
                  price={price}
                  hasHoverEffect
                />
              </CustomLink>
            </li>
          );
        })}
      </Container>
      {hasNext && (
        <MoreButtonWrapper>
          <Button
            stretch
            pending={isLoading}
            disabled={isLoading}
            onClick={fetchNextPage}
          >
            <Text size='medium' weight='bold' color='white'>
              더보기
            </Text>
          </Button>
        </MoreButtonWrapper>
      )}
    </>
  );
}

const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 60px;
`;

const MoreButtonWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${MAX_WIDTH.MOBILE_MEDIUM}) {
    height: 60px;
  }
`;
