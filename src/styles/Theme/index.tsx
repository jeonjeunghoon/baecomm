import { ThemeProvider } from "styled-components";
import { PropsWithChildren } from "react";
import { theme } from "./theme";

export default function Theme({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
