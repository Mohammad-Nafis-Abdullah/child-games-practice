import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import { extendTheme, useTheme } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

// default base style from the Input theme
const baseStyle = definePartsStyle({
  container: defineStyle({
    boxShadow: "sm",
    _focus: {
      boxShadow: "outline",
    },
  }),
});

// Defining a custom variant called outline
const outline = definePartsStyle((props) => {
  const { colorScheme: c } = props;
  const theme = useTheme();
  return {
    container: {
      border: `1px solid ${theme.colors.theme.purple}`,
      borderRadius: "0.8125rem",
      mb: ".5rem",
    },
    button: {
      color: "theme.dark",
      fontSize: "sm",
      fontWeight: "600",
      textTransform: "uppercase",
      borderTopRadius: "0.8125rem",
      px: "1.25rem",
      py: "1rem",
      _hover: {
        // color: "gray.600",
      },
      _focus: {
        color: "theme.purple",
      },
      fontFamily: "Open Sans",
    },
    panel: {
      fontFamily: "Open Sans",
      fontSize: "xs",
      fontWeight: "600",
      letterSpacing: ".54px",
      px: "1.25rem",
      pt: "0",
      pb: "1rem",
    },
  };
});

const variants = {
  outline,
};

const size = {
  md: defineStyle({
    w: 6,
    h: 6,
  }),
};

const sizes = {
  md: definePartsStyle({
    icon: size.md,
  }),
};

export const accordionTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});
