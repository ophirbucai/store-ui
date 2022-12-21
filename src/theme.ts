import basedStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
    tag: "#020202",
  },
  light: {
    primary: "#F0F8FF",
    text: "#474747",
    tag: "#2A9CFF",
  },
  lineHeight: 1.5,
  fontFamily: "'Ubuntu Mono', monospace",
};

export type Theme = typeof theme;
export const styled = basedStyled as ThemedStyledInterface<Theme>;
