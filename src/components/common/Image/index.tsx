import styled from "styled-components";

export type ImageSize = "large" | "medium";

type Props = {
  src: string;
  alt: string;
  stretch?: boolean;
};

export default function Image({ src, alt, stretch = false }: Props) {
  return <StyledImage src={src} alt={alt} $stretch={stretch} />;
}

const StyledImage = styled.img<{ $stretch: boolean }>`
  flex: ${({ $stretch }) => ($stretch ? 1 : "initial")};
`;
