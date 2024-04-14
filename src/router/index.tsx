import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { PATH } from "../constants/path";

import App from "../App";
import ProductsPage from "../pages/Products";
import ProductDetailsPage from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: PATH.APP,
    element: <App />,
    children: [
      {
        path: PATH.PRODUCTS,
        element: <ProductsPage />,
      },
      {
        path: PATH.PRODUCT_DETAILS,
        element: <ProductDetailsPage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
