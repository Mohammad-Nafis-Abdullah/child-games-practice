"use client";

import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontFamily: "Open Sans",
    fontWeight: "700",
    fontSize: "16px",
    padding: "12px 20px",
    lineHeight: "24px",
    fontStyle: "normal",
    borderRadius: "13px", // <-- border radius is same for all variants and sizes
  },

  sizes: {
    xxs: defineStyle({
      fontSize: "md",
      fontWeight: "700",
      lineHeight: "1.5rem",
      px: "1rem",
      h: "2rem",
    }),
    xs: defineStyle({
      fontSize: "md",
      fontWeight: "700",
      lineHeight: "1.5rem",
      px: "1rem",
      h: "2.5rem",
    }),
    sm: defineStyle({
      fontSize: "md",
      fontWeight: "400",
      px: "1rem",
      h: "3.125rem",
      letterSpacing: "1.36px",
    }),
    md: defineStyle({
      fontSize: "md",
      fontWeight: "700",
      lineHeight: "1.5rem",
      px: "1rem",
      h: "4rem",
    }),
    lg: defineStyle({
      fontSize: "md",
      px: "1rem",
      h: "3rem", // Change font size to sm (14px)
    }),
    xl: defineStyle({
      fontSize: "md",
      px: "1rem",
      h: "3.625rem", // Change font size to sm (14px)
    }),
  },

  // Two variants: outline and solid
  variants: {
    primary: {
      bg: "theme.orange",
      color: "white",

      _hover: {
        bg: "#FF7836",
      },

      _active: {
        bg: "theme.purple",
      },

      _disabled: {
        bg: "#C1C1C1 !important",
        color: "white",
        cursor: "not-allowed",
        _hover: {
          bg: "#C1C1C1 !important",
        },
      },
    },

    outline: {
      bg: "transparent",
      color: "theme.purple",
      border: "1px solid",
      borderColor: "theme.purple",

      _hover: {
        bg: "white",
      },

      _active: {
        bg: "white",
        borderColor: "#8800FF",
      },
    },

    outlineWhite: {
      border: "1px solid",

      bg: "white",
      color: "black",
      borderColor: "black",

      _hover: {
        boxShadow: "0px 2px 5px rgba(0, 0, 0, .2)",
      },

      _active: {
        bg: "white",
        color: "black",
        borderColor: "black",
      },
    },

    outlineSM: {
      bg: "transparent",
      color: "theme.purple",
      border: "2.25px solid",
      borderColor: "theme.purple",

      _hover: {
        bg: "white",
      },

      _active: {
        color: "white",
        bg: "theme.purple",
        borderColor: "theme.purple",
      },
    },

    outlineTwo: {
      bg: "transparent",
      color: "theme.purple",
      border: "2px solid",
      borderColor: "theme.purple",

      _hover: {
        bg: "theme.purple",
        color: "white",
      },

      _active: {
        color: "white",
        bg: "theme.purple",
        borderColor: "theme.purple",
        pr: "1.875rem",
      },
    },

    primaryLarge: {
      bg: "theme.orange",
      color: "white",
      fontWeight: "700",
      fontSize: "1rem",
      _hover: {
        bg: "#FF7836",
      },

      _active: {
        bg: "theme.purple",
      },

      _disabled: {
        bg: "#C1C1C1 !important",
        color: "white",
        cursor: "not-allowed",
        _hover: {
          bg: "#C1C1C1 !important",
        },
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    variant: "primary",
    size: "sm",
  },
});
