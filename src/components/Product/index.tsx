import styled from "styled-components";

import Text from "../common/Text";

import { Product as ProductType } from "../../types/products";

type Props = {
  hasHoverEffect?: boolean;
} & ProductType;

export default function Product({
  thumbnail,
  brand,
  title,
  price,
  hasHoverEffect = false,
}: Omit<Props, "id">) {
  return (
    <Wrapper $hasHoverEffect={hasHoverEffect}>
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
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $hasHoverEffect: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 300px;

  &:hover {
    & > div > div > span {
      color: ${({ $hasHoverEffect, theme }) =>
        $hasHoverEffect && theme.colors["--blue"]};
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
