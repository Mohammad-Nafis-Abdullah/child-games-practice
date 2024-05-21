import {
  defineStyle,
  createMultiStyleConfigHelpers,
} from "@chakra-ui/styled-system";
import { listAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle((props) => ({
  container: {
    listStylePos: "inside",
    margin: "0px !important",
    // boxShadow: "md",
  },
  item: {
    p: 1,
    "&::marker": {
      color: mode("green.500", "green.200")(props),
    },
  },
  icon: {
    color: mode("blue.500", "blue.200")(props),
  },
}));

const sizes = {
  xl: definePartsStyle({
    container: defineStyle({
      fontSize: "xl",
      p: 6,
    }),
    icon: defineStyle({
      boxSize: 6,
      mr: 5,
    }),
  }),
};

const orange = definePartsStyle((props) => ({
  container: {
    shadow: "none",
    border: "3px",
    borderStyle: "dashed",
    borderColor: "gray.300",
  },
  item: {
    display: "flex",
    alignItems: "center",
    bg: mode("orange.100", "orange.400")(props),
    borderRadius: "full",
    w: "full",
    px: 5,
    shadow: "sm",
  },
  icon: {
    color: mode("orange.300", "orange.100")(props),
  },
}));

const custom = definePartsStyle((props) => ({
  container: {
    shadow: "none",
    display: "flex",
    flexDirection: "column",
    justify: "center",
    align: "center",
  },
  item: {
    fontFamily: "Open Sans",
    background: "transparent",
    padding: 5,
    border: "none",
  },
}));

const customNoMark = definePartsStyle((props) => ({
  container: {
    shadow: "none",
    display: "flex",
    flexDirection: "column",
    justify: "center",
    align: "center",
  },
  item: {
    fontFamily: "Open Sans",
    background: "transparent",
    padding: 5,
    border: "none",
    listStyle: "none",
  },
}));

export const listTheme = defineMultiStyleConfig({
  variants: {
    orange,
    custom,
    customNoMark,
  },
  sizes,
  baseStyle,
});
