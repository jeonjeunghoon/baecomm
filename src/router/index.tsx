import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { path } from "../constants/path";

import App from "../App";
import Products from "../pages/Products";

const router = createBrowserRouter([
  {
    path: path.app,
    element: <App />,
    children: [
      {
        path: path.products,
        element: <Products />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
