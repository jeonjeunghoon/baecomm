import styled from "styled-components";

import CustomLink from "../../common/CustomLink";
import SearchBox from "../../SearchBox";

import { PATH } from "../../../constants/path";
import Arrow from "../../../asset/svg/arrow";
import { MAX_WIDTH } from "../../../styles/GlobalStyle";
import Text from "../../common/Text";

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
            <Text size='large' weight='bold' color='white'>
              목록으로 돌아가기
            </Text>
          </LinkContentWrapper>
        </CustomLink>
      )}
      <CustomLink to={PATH.PRODUCTS} color='white' reloadDocument>
        {hasTitle && <Title>SHOP</Title>}
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
  padding: 12px 20px;
  background: ${({ theme }) => theme.colors["--gradient"]};

  @media (max-width: ${MAX_WIDTH.MOBILE_MEDIUM}) {
    font-size: 9px;
  }
`;

const LinkContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: white;

  @media (max-width: ${MAX_WIDTH.MOBILE_MEDIUM}) {
    display: none;
  }
`;
