import styled from "styled-components";

import CustomLink from "../../common/CustomLink";
import SearchBox from "../../SearchBox";

import { PATH } from "../../../constants/path";
import Arrow from "../../../asset/svg/arrow";

type Props = {
  hasTitle: boolean;
  hasSearchBox: boolean;
  hasLink: boolean;
};

export default function Header({ hasTitle, hasSearchBox, hasLink }: Props) {
  return (
    <Container>
      {hasLink && (
        <CustomLink to={PATH.PRODUCTS}>
          <LinkContentWrapper>
            <Arrow width={36} height={36} />
            <Title>목록으로 돌아가기</Title>
          </LinkContentWrapper>
        </CustomLink>
      )}
      <CustomLink to={PATH.PRODUCTS} color='white' reloadDocument>
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

const LinkContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: white;
`;
