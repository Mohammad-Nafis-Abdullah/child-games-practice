import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const xl = defineStyle({
  px: "5",
  h: "58",
});

const sizes = {
  xl: definePartsStyle({ field: xl }),
};

const custom = definePartsStyle({
  field: {
    background: "theme.sand",
    borderRadius: "0.8125rem",

    // Let's also provide dark mode alternatives
    // _dark: {
    //   borderColor: 'gray.600',
    //   background: 'gray.800',
    // },
  },
  // addon: {
  //   border: '1px solid',
  //   borderColor: 'gray.200',
  //   background: 'gray.200',
  //   borderRadius: 'full',
  //   color: 'gray.500',

  //   _dark: {
  //     borderColor: 'gray.600',
  //     background: 'gray.600',
  //     color: 'gray.400',
  //   },
  // },
});

export const inputTheme = defineMultiStyleConfig({
  variants: { custom },
  sizes,
});
