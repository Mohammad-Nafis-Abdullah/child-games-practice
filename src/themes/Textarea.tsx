import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  borderRadius: 0,
  fontWeight: "normal",
  border: "2px solid",
  fontSize: "md",
  fontFamily: "var(--font-schoolbell)",
});

const outline = defineStyle({
  border: "2px dashed",
  borderColor: "purple.500",
});

const filled = defineStyle({
  borderColor: "purple.500",
});

const flushed = defineStyle({
  borderColor: "purple.500",
});

const brandPrimary = defineStyle({
  borderColor: "purple.300",
  background: "purple.50",
  fontSize: "lg",
  _focus: {
    borderColor: "purple.500",
  },
  _dark: {
    background: "purple.900",
  },
});

const custom = defineStyle({
  background: "theme.sand",
  border: "none",
  borderRadius: "13px",
  letterSpacing: "1.36px",
  py: "8px",
  px: "20px",
  h: "9rem",
});

export const textareaTheme = defineStyleConfig({
  baseStyle,
  // variants: { outline, filled, flushed, brandPrimary },
  variants: { custom },
});
