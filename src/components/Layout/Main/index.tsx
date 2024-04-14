import { PropsWithChildren } from "react";
import styled from "styled-components";
import { MAX_WIDTH } from "../../../styles/GlobalStyle";

export default function Main({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <ChildrenSection>{children}</ChildrenSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 100px 0px 40px;

  background-color: ${({ theme }) => theme.colors["--light-gray"]};

  @media (max-width: ${MAX_WIDTH.MOBILE_MEDIUM}) {
    padding: 60px 0 0 0;
  }
`;

const ChildrenSection = styled.section`
  min-width: 360px;
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 70px;

  border-radius: 8px;
  background-color: white;
  box-shadow: 12px 0 15px -4px rgba(0, 0, 0, 0.1),
    -12px 0 8px -4px rgba(0, 0, 0, 0.1);

  @media (max-width: ${MAX_WIDTH.MOBILE_MEDIUM}) {
    padding: 20px 20px;
  }
`;
