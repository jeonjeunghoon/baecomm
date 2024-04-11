import styled from "styled-components";

import CustomLink from "../../common/CustomLink";
import SearchBox from "../../SearchBox";

import { path } from "../../../constants/path";

type Props = {
  hasTitle: boolean;
  hasSearchBox: boolean;
};

export default function Header({ hasTitle, hasSearchBox }: Props) {
  return (
    <Container>
      <CustomLink to={path.app} color='white' reloadDocument>
        {hasTitle && <Title>배컴 SHOP</Title>}
      </CustomLink>
      {hasSearchBox && <SearchBox />}
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 12px 60px;
  background: ${({ theme }) => theme.colors["--gradient"]};
`;

const Title = styled.h1`
  color: white;
`;
