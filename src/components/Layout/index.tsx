import { PropsWithChildren } from "react";
import styled from "styled-components";

import Header from "./Header";
import Main from "./Main";

type Props = {
  hasTitle: boolean;
} & PropsWithChildren;

export default function Layout({ hasTitle, children }: Props) {
  return (
    <Container>
      <Header hasTitle={hasTitle} />
      <Main>{children}</Main>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
