import { Link, LinkProps } from "react-router-dom";
import styled, { css, CSSProperties } from "styled-components";

import Text from "../Text";

type Variant = "primary" | "secondary";

type Props = {
  variant?: Variant;
  stretch?: boolean;
  color?: CSSProperties["color"];
} & LinkProps;

export default function CustomLink({
  variant = "primary",
  stretch = false,
  children,
  ...rest
}: Props) {
  return (
    <StyledLink $variant={variant} $stretch={stretch} {...rest}>
      <Text
        size='medium'
        weight='bold'
        color={variant === "primary" ? "default" : "white"}
        stretch
      >
        {children}
      </Text>
    </StyledLink>
  );
}

const StyledLink = styled(Link)<{
  $variant: Variant;
  $stretch: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: ${({ $stretch }) => ($stretch ? 1 : "initial")};
  ${({ $variant }) => generateBackgroundColor($variant)}
  color: ${({ $variant }) => $variant === "secondary" && "white"};

  padding: 8px 12px;

  &:link {
    color: ${({ $variant }) => $variant === "secondary" && "white"};
  }

  &:visited {
    color: ${({ $variant }) => $variant === "secondary" && "white"};
  }
`;

const generateBackgroundColor = ($variant: Variant) => {
  const backgroundColor = {
    primary: css``,
    secondary: css`
      background: ${({ theme }) => theme.colors["--gradient"]};
    `,
  };

  return backgroundColor[$variant];
};
