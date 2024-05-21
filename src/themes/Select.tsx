import { selectAnatomy } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
  useTheme,
} from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

// const outline = definePartsStyle({
//   field: {
//     fontFamily: "mono",
//     fontWeight: "bold",
//     borderRadius: 0,
//     borderColor: "purple.100",

//     _focusWithin: {
//       ringColor: "purple.200",
//       ring: "2px",
//       ringOffset: "1px",
//       ringOffsetColor: "purple.100",
//       borderColor: "purple.50",
//     },
//   },
// });

// const filled = definePartsStyle({
//   field: {
//     background: "gray.300",
//     _dark: {
//       background: "gray.600",
//     },
//   },
//   icon: {
//     color: "gray.800",
//     _dark: {
//       color: "gray.200",
//     },
//   },
// });

// const flushed = definePartsStyle({
//   field: {
//     borderBottom: "1px dashed",
//     borderColor: "purple.300",
//   },
//   icon: {
//     fontSize: "6xl",
//   },
// });

const brandPrimary = definePartsStyle(() => {
  const theme = useTheme();

  return {
    field: {
      background: theme.colors.theme.sand,
      border: "none",
      borderColor: "purple.200",
      borderRadius: "13px",
    },
    icon: {
      color: "purple.400",
    },
  };
});

const custom = defineStyle({
  fontSize: "16",
  px: "5",
  h: "58",
});

const sizes = {
  custom: definePartsStyle({ field: custom }),
};

export const selectTheme = defineMultiStyleConfig({
  variants: { brandPrimary },
  sizes,
});
