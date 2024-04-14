import styled from "styled-components";

import Text from "../../components/common/Text";
import CustomLink from "../../components/common/CustomLink";

import { PATH } from "../../constants/path";

export default function NotFound() {
  return (
    <Container>
      <Text size='large' weight='bolder'>
        404 - 잘못된 접근입니다.
      </Text>
      <LinkWrapper>
        <CustomLink to={PATH.PRODUCTS} variant='secondary' stretch>
          홈으로 돌아가기
        </CustomLink>
      </LinkWrapper>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

const LinkWrapper = styled.div`
  display: flex;
  width: 200px;
`;
