import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "../App";

test("renders hello world title", () => {
  render(<App />);
  const title = screen.getByText(/hello world/i);

  expect(title).toBeInTheDocument();
});
