import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, useTheme } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  tab: {
    fontWeight: "semibold", // change the font weight
  },
  tabpanel: {
    fontFamily: "mono", // change the font family
  },
});

// define custom sizes
const sizes = {
  base: definePartsStyle({
    // define the parts that will change for each size
    tab: {
      fontFamily: "Open Sans",
      fontSize: "xs",
      fontWeight: "600",
      py: "1",
      px: "4",
      flexWrap: "wrap",
    },
    tabpanel: {
      py: "4",
      px: "4",
    },
  }),
  md: definePartsStyle({
    // define the parts that will change for each size
    tab: {},
  }),
};

// define custom variants
const custom = definePartsStyle((props) => {
  const theme = useTheme();

  return {
    tab: {
      borderColor: "transparent",
      bg: "transparent",
      border: "none",
      borderBottom: `2px solid ${theme.colors.theme.sand}`,
      fontSize: "xs",
      fontWeight: "600",
      _selected: {
        color: theme.colors.theme.purple,
        borderColor: "inherit",
        borderBottom: `2px solid ${theme.colors.theme.purple}`,
      },
    },
    tablist: {
      // borderBottom: "2x solid",
      // borderColor: "inherit",
      flexWrap: "wrap",
    },
    tabpanel: {
      border: "none",
      borderColor: "inherit",
      borderBottomRadius: "lg",
      borderTopRightRadius: "lg",
    },
  };
});

const variants = {
  custom: custom,
};

// define which sizes, variants, and color schemes are applied by default
const defaultProps = {
  // size: "sm",
  // variant: "colorful",
  // colorScheme: "green",
};

// export the component theme
export const tabsTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
