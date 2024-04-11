const colors = {
  gradient: "linear-gradient(to right, #32CB36, #3540F6)",
  grey: "#4E5153",
} as const;

export const theme = {
  colors,
};

export type Colors = keyof typeof theme.colors;
