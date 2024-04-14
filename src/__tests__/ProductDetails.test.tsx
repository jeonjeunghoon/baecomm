import { ReactElement } from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import ProductDetails from "../components/ProductDetails";

import { productDetailsState } from "../state";
import Theme from "../styles/Theme";

const product = {
  id: 1,
  thumbnail: "thumbnail-url",
  brand: "Test Brand",
  title: "Test Product",
  price: 10,
  description: "Test description",
  images: ["image1-url", "image2-url"],
};

const customRender = (children: ReactElement) => {
  return render(
    <Theme>
      <RecoilRoot
        initializeState={({ set }) => {
          set(productDetailsState, product);
        }}
      >
        <BrowserRouter>{children}</BrowserRouter>
      </RecoilRoot>
    </Theme>
  );
};

describe("Product Detail 페이지", () => {
  test("thumbnail, brand, title, price, description, images가 존재한다.", () => {
    customRender(<ProductDetails id={1} />);

    expect(screen.getByAltText("상품 이미지")).toBeInTheDocument();
    expect(screen.getByText("Test Brand")).toBeInTheDocument();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByAltText("Test Product-0")).toBeInTheDocument();
    expect(screen.getByAltText("Test Product-1")).toBeInTheDocument();
  });
});
