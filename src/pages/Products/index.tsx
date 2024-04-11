import styled from "styled-components";

import Layout from "../../components/Layout";
import Product from "../../components/Product";

import { useProducts } from "./useProducts";

export default function Products() {
  const products = useProducts();

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
      </ProductPage>
    </Layout>
  );
}

const ProductPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  border-radius: 8px;
  background-color: white;
`;

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 60px;
  place-items: center;
  width: fit-content;
  height: fit-content;
`;
