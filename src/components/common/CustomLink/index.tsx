import { Link, LinkProps } from "react-router-dom";
import styled, { CSSProperties } from "styled-components";

type Props = {
  color?: CSSProperties["color"];
} & LinkProps;

export default function CustomLink({
  color = "default",
  children,
  ...rest
}: Props) {
  return (
    <StyledLink $color={color} {...rest}>
      {children}
    </StyledLink>
  );
}

const StyledLink = styled(Link)<{
  $color: CSSProperties["color"];
}>`
  color: ${({ $color }) => $color !== "default" && $color};

  &:link {
    color: ${({ $color }) => $color !== "default" && $color};
  }

  &:visited {
    color: ${({ $color }) => $color !== "default" && $color};
  }
`;
