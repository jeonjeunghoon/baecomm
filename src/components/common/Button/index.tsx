import { MouseEventHandler, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

type Variant = "primary" | "secondary";

type Props = {
  variant?: Variant;
  stretch?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & PropsWithChildren;

export default function Button({
  variant = "primary",
  stretch = false,
  children,
  onClick,
}: Props) {
  return (
    <StyledButton $variant={variant} $stretch={stretch} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ $variant: Variant; $stretch: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: ${({ $stretch }) => ($stretch ? 1 : "initial")};
  ${({ $variant }) => generateBackgroundColor($variant)}

  padding: 8px 12px;
`;

const generateBackgroundColor = ($variant: Variant) => {
  const backgroundColor = {
    primary: css`
      background: ${({ theme }) => theme.colors["--gradient"]};
    `,
    secondary: css`
      background-color: ${({ theme }) => theme.colors["--naver-green"]};
    `,
  };

  return backgroundColor[$variant];
};
