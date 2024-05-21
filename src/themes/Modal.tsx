import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle(() => {
  return {
    dialog: {
      borderRadius: "13px",
      bg: "theme.main-bg",
      py: "32px",
    },
  };
});

const sizes = {
  base: definePartsStyle({
    dialog: {
      margin: "100px",
    },
    closeButton: {
      top: "100px",
      right: "100px",
    },
    dialogContainer: {
      padding: "100px",
    },
  }),
  sm: definePartsStyle({
    dialog: {
      width: "800px",
    },
    closeButton: {
      top: "24px",
      right: "20px",
    },
  }),
  md: definePartsStyle({
    dialog: {
      width: "800px",
    },
  }),
  lg: definePartsStyle({
    dialog: {
      width: "800px",
    },
  }),
  xl: definePartsStyle({
    dialog: {
      width: "800px",
    },
  }),
  xxl: definePartsStyle({
    dialog: {
      width: "1200px",
    },
  }),
  bb: definePartsStyle({
    dialog: {
      width: "1200px",
      margin: "24px",
    },
    dialogContainer: {
      padding: 0,
    },
  }),
};

const main = definePartsStyle(() => {
  return {
    dialog: {
      bg: "theme.main-bg",
    },
  };
});
const green = definePartsStyle(() => {
  return {
    dialog: {
      bg: "theme.darkGreen",
    },
  };
});

const bb = definePartsStyle(() => {
  return {
    dialogContainer: {
      bgImage: "/landing/bb-texture.png",
      bgRepeat: "no-repeat",
      bgSize: "cover",
    },
  };
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: { main, green, bb },
  // defaultProps: {
  //   colorScheme: "purple", //set the default color scheme to purple
  //   size: "xxl",
  // },
});
