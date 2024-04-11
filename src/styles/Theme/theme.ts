const colors = {
  "--gray": "#4E5153",
  "--light-gray": "#f1f4f6",
  "--blue": "#0070E0",
  "--naver-green": "#32CB36",
  "--gradient": "linear-gradient(to right, #32CB36, #3540F6)",
} as const;

export const theme = {
  colors,
};

export type Colors = keyof typeof theme.colors;
