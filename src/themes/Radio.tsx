import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, useTheme } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle(() => {
  const theme = useTheme();

  return {
    // define the part you're going to style
    // control: {
    //   borderRadius: "50%", // change the border radius
    //   borderColor: theme.colors.theme.purple, // change the border color
    // },
  };
});

const sizes = {
  // define custom styles for custom size
  custom: definePartsStyle({
    control: { w: "6", h: "6" },
    label: {
      fontSize: "24",
      fontWeight: "600",
      fontFamily: "var(--font-schoolbell)",
    },
  }),
  customBold: definePartsStyle({
    control: { w: "6", h: "6" },
    label: {
      fontSize: "12",
      fontWeight: "800",
      fontFamily: "var(--font-opensans)",
    },
  }),
};

// define custom variant
const variants = {
  custom: definePartsStyle(() => {
    const theme = useTheme();

    return {
      control: {
        borderColor: theme.colors.theme.grey,
        background: theme.colors.theme["main-bg"],

        _checked: {
          background: theme.colors.theme.purple,
          borderColor: theme.colors.theme.purple,

          _hover: {
            bg: "purple.700",
            borderColor: "purple.700",
          },
        },
        _hover: {
          bg: "purple.100",
          borderColor: "purple.700",
        },
      },
    };
  }),
  customColumn: definePartsStyle(() => {
    const theme = useTheme();

    return {
      container: {
        display: "flex",
        gap: ".5rem",
        flexDirection: "column",
      },
      control: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: theme.colors.theme.grey,
        background: theme.colors.theme["main-bg"],

        _checked: {
          background: theme.colors.theme.purple,
          borderColor: theme.colors.theme.purple,

          _hover: {
            bg: "purple.700",
            borderColor: "purple.700",
          },
        },
        _hover: {
          bg: "purple.100",
          borderColor: "purple.700",
        },
      },
    };
  }),
};

// export the component theme
export const radioTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
});
