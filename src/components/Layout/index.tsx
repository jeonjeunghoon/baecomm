import { PropsWithChildren } from "react";
import styled from "styled-components";

import Header from "./Header";
import Main from "./Main";

type Props = {
  hasTitle: boolean;
  hasSearchBox: boolean;
} & PropsWithChildren;

export default function Layout({ hasTitle, hasSearchBox, children }: Props) {
  return (
    <Container>
      <Header hasTitle={hasTitle} hasSearchBox={hasSearchBox} />
      <Main>{children}</Main>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
