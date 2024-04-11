import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

export default function Input({ ...rest }: ComponentPropsWithoutRef<"input">) {
  return <StyledInput {...rest} />;
}

const StyledInput = styled.input`
  width: 200px;
  height: 28px;
  padding: 4px 8px;

  border: none;
`;
