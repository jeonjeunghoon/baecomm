import styled from "styled-components";

import Text from "../common/Text";
import Image from "../common/Image";

import { Product as ProductType } from "../../types/products";

type Size = "large" | "small";

type Props = {
  size?: Size;
  hasHoverEffect?: boolean;
} & ProductType;

export default function Product({
  thumbnail,
  brand,
  title,
  price,
  size = "small",
  hasHoverEffect = false,
}: Omit<Props, "id">) {
  return (
    <Wrapper $hasHoverEffect={hasHoverEffect}>
      <Image src={thumbnail} alt='상품 이미지' stretch />
      <Body>
        <BrandTitleContainer>
          <Text size='small' weight='bold' color='gray' align='left'>
            {brand}
          </Text>
          <Text
            size={size}
            stretch
            lineLimit={size === "small" ? 1 : 0}
            align='left'
          >
            {title}
          </Text>
        </BrandTitleContainer>
        <Text
          size={size === "small" ? "medium" : "large"}
          weight='bold'
          align='left'
        >
          ${price.toLocaleString("en-US")}
        </Text>
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $hasHoverEffect: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    & > div > div > span {
      color: ${({ $hasHoverEffect, theme }) =>
        $hasHoverEffect && theme.colors["--blue"]};
    }
  }
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
