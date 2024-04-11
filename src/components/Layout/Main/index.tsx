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
`;

const ChildrenSection = styled.section`
  width: 600px;
  margin: 0 auto;
`;
