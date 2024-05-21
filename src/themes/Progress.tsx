import { progressAnatomy } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
  defineStyleConfig,
  useTheme,
} from "@chakra-ui/react";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(progressAnatomy.keys);

const sizes = {
  custom: {
    h: "30px",
  },
};

const customPrimary = definePartsStyle({
  filledTrack: defineStyle({
    bg: "theme.purple",
  }),
  unfilledTrack: defineStyle({
    bg: "theme.purple",
  }),
  label: defineStyle({
    color: "theme.purple",
  }),
});

// export const selectTheme = defineMultiStyleConfig({
//   variants: {
//     {customPrimary}
//   },
//   sizes,
// });
