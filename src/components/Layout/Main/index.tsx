import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function Main({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <ChildrenSection>{children}</ChildrenSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 100px 0 40px;

  background-color: ${({ theme }) => theme.colors["--light-gray"]};
`;

const ChildrenSection = styled.section`
  width: 600px;
  margin: 0 auto;

  box-shadow: 12px 0 15px -4px rgba(0, 0, 0, 0.1),
    -12px 0 8px -4px rgba(0, 0, 0, 0.1);
`;
