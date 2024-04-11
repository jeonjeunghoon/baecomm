import styled from "styled-components";

import CustomLink from "../common/CustomLink";
import Text from "../common/Text";

import { Product as Props } from "../../types/products";

export default function Product({ id, thumbnail, brand, title, price }: Props) {
  return (
    <Wrapper>
      <CustomLink to={`${id}`}>
        <Image src={thumbnail} alt='상품 이미지' />
        <Body>
          <BrandTitleContainer>
            <Text size='small' weight='bold' color='gray'>
              {brand}
            </Text>
            <Text size='small' stretch lineLimit={1}>
              {title}
            </Text>
          </BrandTitleContainer>
          <Text weight='bold'>${price.toLocaleString("en-US")}</Text>
        </Body>
      </CustomLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 300px;

  &:hover {
    & > a > div > div > span {
      color: ${({ theme }) => theme.colors["--blue"]};
    }
  }
`;

const Image = styled.img`
  min-width: 200px;
  max-width: 200px;

  min-height: 200px;
  max-height: 200px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100px;
  padding: 8px 0;
`;

const BrandTitleContainer = styled.div`
  display: flex;
  gap: 8px;
`;
