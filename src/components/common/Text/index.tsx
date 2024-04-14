import { PropsWithChildren } from "react";
import styled, { CSSProperties } from "styled-components";

type Size = "large" | "medium" | "small";
type Align = "left" | "center" | "right";

type Props = {
  size?: Size;
  weight?: CSSProperties["fontWeight"];
  color?: CSSProperties["color"];
  lineLimit?: number;
  stretch?: boolean;
  align?: Align;
} & PropsWithChildren;

export default function Text({
  size = "medium",
  weight = "normal",
  color = "default",
  lineLimit = 0,
  stretch = false,
  align = "center",
  children,
}: Props) {
  return (
    <StyledText
      $size={size}
      $weight={weight}
      $color={color}
      $lineLimit={lineLimit}
      $stretch={stretch}
      $align={align}
    >
      {children}
    </StyledText>
  );
}

const StyledText = styled.span<{
  $size: Size;
  $weight: CSSProperties["fontWeight"];
  $color: CSSProperties["color"];
  $lineLimit: number;
  $stretch: boolean;
  $align: Align;
}>`
  flex: ${({ $stretch }) => $stretch && 1};
  font-size: ${({ $size }) => generateSize($size)};
  font-weight: ${({ $weight }) => $weight};
  color: ${({ $color }) => $color !== "default" && $color};
  text-align: ${({ $align }) => $align};

  ${({ $lineLimit }) =>
    $lineLimit &&
    `
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${$lineLimit};
    -webkit-box-orient: vertical;
    word-break: break-all;
  `};
`;

const generateSize = ($size: Size) => {
  const SIZE = {
    small: "1.4rem",
    medium: "1.6rem",
    large: "2.8rem",
  };

  return SIZE[$size];
};
