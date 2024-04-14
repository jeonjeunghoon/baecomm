import { MouseEventHandler, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import Spinner from "../Spinner";
import Text from "../Text";

type Variant = "primary" | "secondary";

type Props = {
  variant?: Variant;
  stretch?: boolean;
  pending?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & PropsWithChildren;

export default function Button({
  variant = "primary",
  stretch = false,
  pending = false,
  disabled = false,
  children,
  onClick,
}: Props) {
  return (
    <StyledButton
      $variant={variant}
      $stretch={stretch}
      disabled={disabled}
      onClick={onClick}
    >
      {pending ? (
        <Spinner size='medium' color='white' />
      ) : (
        <Text size='medium' weight='bold' color='white'>
          {children}
        </Text>
      )}
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
