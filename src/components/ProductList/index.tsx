import styled from "styled-components";

import Product from "../Product";
import CustomLink from "../common/CustomLink";
import Button from "../common/Button";
import Text from "../common/Text";

import { useProducts } from "../../pages/Products/useProducts";

export default function ProductList() {
  const { products, hasNext, isLoading, fetchNextPage } = useProducts();

  if (!products) return null;

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
`;
