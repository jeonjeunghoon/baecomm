import { Suspense } from "react";

import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";

export default function Products() {
  return (
    <Layout hasTitle hasSearchBox hasLink={false}>
      <Suspense fallback={<div>로딩 중 ...</div>}>
        <ProductList />
      </Suspense>
    </Layout>
  );
}
