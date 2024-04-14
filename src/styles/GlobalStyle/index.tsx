import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const MAX_WIDTH = {
  MOBILE_SMALL: "374px",
  MOBILE_MEDIUM: "424px",
  MOBILE_LARGE: "767px",
  TABLET: "1023px",
  LAPTOP: "1439px",
  LAPTOP_LARGE: "2559px",
};

export const GlobalStyle = createGlobalStyle`
	${reset}

	html {
		font-size: 10px;

		@media (max-width: ${MAX_WIDTH.TABLET}) {
			font-size: 9px;
    }
		
		@media (max-width: ${MAX_WIDTH.MOBILE_MEDIUM}) {
			font-size: 8px;
    }
	}

	* {
		font-family: 'Roboto', 'sans-serif';
		color: ${({ theme }) => theme.colors["--gray"]}
	}

	h1 {
		font-size: 2.8rem;
	}
`;
