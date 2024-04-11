import React from "react";
import ReactDOM from "react-dom/client";

import Router from "./router";
import Theme from "./styles/Theme";
import { GlobalStyle } from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <Router />
    </Theme>
  </React.StrictMode>
);
