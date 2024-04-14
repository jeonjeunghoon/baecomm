import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ReactElement } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

import Theme from "../styles/Theme";
import { productsState } from "../state";
import ProductsPage from "../pages/Products";
import ProductList from "../components/ProductList";

const products = {
  url: "",
  products: [
    {
      id: 1,
      thumbnail: "thumbnail-url",
      brand: "Test Brand 1",
      title: "Test Product 1",
      price: 10,
    },
    {
      id: 2,
      thumbnail: "thumbnail-url",
      brand: "Test Brand 2",
      title: "Test Product 2",
      price: 20,
    },
    {
      id: 3,
      thumbnail: "thumbnail-url",
      brand: "Test Brand 3",
      title: "Test Product 3",
      price: 30,
    },
    {
      id: 4,
      thumbnail: "thumbnail-url",
      brand: "Test Brand 4",
      title: "Test Product 4",
      price: 40,
    },
    {
      id: 5,
      thumbnail: "thumbnail-url",
      brand: "Test Brand 5",
      title: "Test Product 5",
      price: 50,
    },
    {
      id: 6,
      thumbnail: "thumbnail-url",
      brand: "Test Brand 6",
      title: "Test Product 6",
      price: 60,
    },
    {
      id: 7,
      thumbnail: "thumbnail-url",
      brand: "Test Brand 7",
      title: "Test Product 7",
      price: 70,
    },
    {
      id: 8,
      thumbnail: "thumbnail-url",
      brand: "Test Brand 8",
      title: "Test Product 8",
      price: 80,
    },
    {
      id: 9,
      thumbnail: "thumbnail-url",
      brand: "Test Brand 9",
      title: "Test Product 9",
      price: 90,
    },
    {
      id: 10,
      thumbnail: "thumbnail-url",
      brand: "Test Brand 10",
      title: "Test Product 10",
      price: 100,
    },
  ],
  page: 0,
  searchWord: "",
  total: 11,
};

const customRender = (children: ReactElement) => {
  return render(
    <Theme>
      <RecoilRoot
        initializeState={({ set }) => {
          set(productsState, products);
        }}
      >
        <BrowserRouter>{children}</BrowserRouter>
      </RecoilRoot>
    </Theme>
  );
};

describe("Products 페이지", () => {
  test("처음 보여지는 상품 목록의 길이는 10개다.", () => {
    customRender(<ProductList />);

    const productItems = screen.getAllByRole("listitem");

    expect(productItems.length).toBe(products.products.length);
  });

  test("각 상품마다 thumbnail, brand, title, price가 존재한다.", () => {
    customRender(<ProductList />);
    const productItems = screen.getAllByRole("listitem");

    productItems.forEach((item, index) => {
      expect(item).toBeInTheDocument();
      expect(screen.getAllByAltText("상품 이미지")[index]).toBeInTheDocument();
      expect(screen.getByText(`Test Brand ${index + 1}`)).toBeInTheDocument();
      expect(screen.getByText(`Test Product ${index + 1}`)).toBeInTheDocument();
      expect(screen.getByText(`$${10 * (index + 1)}`)).toBeInTheDocument();
    });
  });

  test("검색창이 존재한다.", () => {
    customRender(<ProductsPage />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  test("더보기 버튼이 존재한다.", () => {
    customRender(<ProductsPage />);

    const button = screen.getByText("로딩 중 ...");

    expect(button).toBeInTheDocument();
  });
});
