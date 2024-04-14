import { Suspense } from "react";

import Layout from "../../components/Layout";
import ErrorBoundary from "../../components/ErrorBoundary";
import ProductList from "../../components/ProductList";

export default function ProductsPage() {
  return (
    <Layout hasTitle hasSearchBox hasLink={false}>
      <ErrorBoundary>
        <Suspense fallback={<div>로딩 중 ...</div>}>
          <ProductList />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
