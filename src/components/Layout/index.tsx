import { PropsWithChildren } from "react";
import styled from "styled-components";

import Header from "./Header";
import Main from "./Main";

type Props = {
  hasTitle: boolean;
  hasSearchBox: boolean;
  hasLink: boolean;
} & PropsWithChildren;

export default function Layout({
  hasTitle,
  hasSearchBox,
  hasLink,
  children,
}: Props) {
  return (
    <Container>
      <Header
        hasTitle={hasTitle}
        hasSearchBox={hasSearchBox}
        hasLink={hasLink}
      />
      <Main>{children}</Main>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
