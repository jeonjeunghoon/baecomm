import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Layout from "../../components/Layout";
import ErrorBoundary from "../../components/ErrorBoundary";
import ProductDetails from "../../components/ProductDetails";
import Error from "../../components/Error";
import Spinner from "../../components/common/Spinner";

import { PATH } from "../../constants/path";

export default function ProductDetailsPage() {
  const { pathname } = useLocation();
  const id = Number(pathname.split("/").pop());

  return (
    <Layout hasTitle={false} hasSearchBox={false} hasLink>
      <ErrorBoundary
        fallback={
          <Error
            title='존재하지 않는 상품입니다'
            label='홈으로 돌아가기'
            to={PATH.PRODUCTS}
            withLink
          />
        }
      >
        <Suspense
          fallback={
            <SpinnerWrapper>
              <Spinner size='large' />
            </SpinnerWrapper>
          }
        >
          <ProductDetails id={id} />
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
