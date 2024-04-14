import styled, { keyframes } from "styled-components";

export type SpinnerSize = "large" | "medium" | "small";
export type SpinnerColor = "default" | "white";
export type Props = {
  size: SpinnerSize;
  color?: SpinnerColor;
};

const PATH_LENGTH = 50 as const;

export default function Spinner({ size, color = "default" }: Props) {
  const { width, height, strokeWidth } = spinnerSize[size];

  const viewBox = `-${width / 2} -${height / 2} ${width} ${height}`;
  const circleRadius = width / 2 - strokeWidth / 2;

  return (
    <StyledSvg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <StyledCircle
        r={circleRadius}
        strokeWidth={strokeWidth}
        fill='none'
        pathLength={PATH_LENGTH}
        $color={color}
      />
    </StyledSvg>
  );
}

const spinnerAnimation = keyframes`
  0% {
    stroke-dashoffset: ${PATH_LENGTH};
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -${PATH_LENGTH};
  }
`;

const StyledSvg = styled.svg`
  stroke-dasharray: ${PATH_LENGTH};
  stroke-dashoffset: ${PATH_LENGTH};
  rotate: -90deg;
  animation: ${spinnerAnimation} 1.6s ease-in-out infinite;
`;

const StyledCircle = styled.circle<{ $color: SpinnerColor }>`
  stroke: ${({ $color, theme }) =>
    $color === "default" ? theme.colors["--naver-green"] : "white"};
  opacity: 0.6;
`;

const spinnerSize: Record<
  SpinnerSize,
  { width: number; height: number; strokeWidth: number }
> = {
  large: {
    width: 42,
    height: 42,
    strokeWidth: 6,
  },
  medium: {
    width: 20,
    height: 20,
    strokeWidth: 4,
  },
  small: {
    width: 16,
    height: 16,
    strokeWidth: 3,
  },
} as const;
