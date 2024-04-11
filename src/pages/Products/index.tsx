import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import Layout from "../../components/Layout";
import CustomLink from "../../components/common/CustomLink";
import Button from "../../components/common/Button";
import Text from "../../components/common/Text";
import Product from "../../components/Product";

import { useProducts } from "./useProducts";
import { pageState } from "../../state";

export default function Products() {
  const { products, hasNext, isFetching } = useProducts();
  const setPage = useSetRecoilState(pageState);

  const changePage = () => {
    if (isFetching || !hasNext) return;

    setPage((page) => page + 1);
  };

  if (!products) return null;

  return (
    <Layout hasTitle hasSearchBox hasLink={false}>
      <ProductList>
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
      </ProductList>
      {hasNext && (
        <MoreButtonWrapper>
          <Button stretch onClick={changePage}>
            <Text size='medium' weight='bold' color='white'>
              더보기
            </Text>
          </Button>
        </MoreButtonWrapper>
      )}
    </Layout>
  );
}

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 60px;
`;

const MoreButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;
