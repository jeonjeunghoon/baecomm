import { css } from "styled-components";

export const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  a {
    color: ${({ theme }) => theme.colors.grey};
    text-decoration: none;

    &:link {
      color: ${({ theme }) => theme.colors.grey};
    }

    &:visited {
      color: ${({ theme }) => theme.colors.grey};
    }
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }
`;
