import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const GlobalStyle = createGlobalStyle`
	${reset}

	html {
		font-size: 10px;
	}

	* {
		font-family: 'Roboto', 'sans-serif';
		color: ${({ theme }) => theme.colors.grey}
	}
`;
