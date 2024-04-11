import styled from "styled-components";

import Layout from "../../components/Layout";
import Product from "../../components/Product";
import Button from "../../components/common/Button";

import { useProducts } from "./useProducts";

export default function Products() {
  const { products, hasNext, showMoreProducts } = useProducts();

  if (!products) return null;

  return (
    <Layout hasTitle>
      <ProductPage>
        <ProductList>
          {products.map(({ id, thumbnail, brand, title, price }) => {
            return (
              <li key={id}>
                <Product
                  id={id}
                  thumbnail={thumbnail}
                  brand={brand}
                  title={title}
                  price={price}
                />
              </li>
            );
          })}
        </ProductList>
        {hasNext && (
          <MoreButtonWrapper>
            <Button label='더보기' stretch onClick={showMoreProducts} />
          </MoreButtonWrapper>
        )}
      </ProductPage>
    </Layout>
  );
}

const ProductPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 40px 70px;

  border-radius: 8px;
  background-color: white;
`;

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 60px;
`;

const MoreButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;
