import { Suspense } from "react";
import styled from "styled-components";

import Layout from "../../components/Layout";
import ErrorBoundary from "../../components/ErrorBoundary";
import ProductList from "../../components/ProductList";
import Spinner from "../../components/common/Spinner";

export default function ProductsPage() {
  return (
    <Layout hasTitle hasSearchBox hasLink={false}>
      <ErrorBoundary>
        <Suspense
          fallback={
            <SpinnerWrapper>
              <Spinner size='large' />
            </SpinnerWrapper>
          }
        >
          <ProductList />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
