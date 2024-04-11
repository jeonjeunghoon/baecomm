import { MouseEventHandler } from "react";
import styled from "styled-components";

type Props = {
  label?: string;
  stretch?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ label, stretch = false, onClick }: Props) {
  return (
    <StyledButton $stretch={stretch} onClick={onClick}>
      {label}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ $stretch: boolean }>`
  flex: ${({ $stretch }) => ($stretch ? 1 : "initial")};
  padding: 8px 12px;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors["--gradient"]};
  font-size: 1.6rem;
  font-weight: bold;
  color: white;
`;
