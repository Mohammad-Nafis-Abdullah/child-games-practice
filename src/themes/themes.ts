"use client";
import { Select, extendTheme } from "@chakra-ui/react";
import { Button } from "./Button";
import { selectTheme } from "./Select";
import { radioTheme } from "./Radio";
import { inputTheme } from "./Input";
import { tabsTheme } from "./Tabs";
import { accordionTheme } from "./Accordion";
import { listTheme } from "./List";
import { textareaTheme } from "./Textarea";
import { modalTheme } from "./Modal";
import { formLabelTheme } from "./Form";

export const theme = extendTheme({
  config: {
    allowUnknownProps: true,
  },
  colors: {
    primary: "#FF0000",
    secondary: "#FFE168",

    theme: {
      purple: "#55198A",
      primary: "#55198A",
      sand: "#F4E2D6",
      "main-bg": "#FEEFE5",
      orange: "#FF5400",
      darkGreen: "#A9C667",
      yellow: "#FFE168",
      grey: "#BDBCDB",
      "grey-500": "#8A8894",
      dark: "#212121",
      green: "#CBE892",

      // old bg clrs
      oliveGreen: "#808000",
      sunYellow: "#f87217",
      periwinklePurple: "#7575cf",
      pumpkinOrange: "#f87217",
      magenta: "#ff00ff",
      azureBlue: "#4863a0",
      dragonGreen: "#6af892",
      bloodRed: "#7E3517",
      chromeGold: "#ffce44",

      // new bg clrs
      pastelYellow: "#FAF884",
      mossGreen: "#8A9A5B",
      copperRed: "#CB6D51",
      seafoamGreen: "#3EA99F",
      roseDust: "#997070",

      // drawing-borad
      success: "#28a745",
      erase: "#800020",
      eraseActive: "#FF0800",
      undo: "#007BFF",
      redo: "#6A1B9A",
      clear: "#6C757D",

      //dev colors
      snow: "#FFFAFA",
    },
  },

  fonts: {
    heading: "var(--font-schoolbell)",
    body: "var(--font-schoolbell)",
  },
  fontSizes: {
    "6xl": "4rem", // Add your custom font sizes here
    "5xl": "3rem",
    "4xl": "2.5rem",
    "3xl": "2rem",
    "2xl": "1.5rem",
    xl: "1.25rem",
    lg: "1.125rem",
    md: "1rem",
    sm: "0.875rem",
    xs: "0.75rem",
  },

  shadows: {
    custom: "4px 4px 13px 0px #CEAE99",
    soft: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
  },

  breakpoints: {
    xs: "360px",
    sm: "480px",
    md: "768px",
    lg: "1000px",
    xl: "1440px",
  },

  sizes: {
    modalSm: "100px",
    modalMd: "100px",
    modalLg: "100px",
    modalXl: "100px",
    modal2xl: "100px",
  },

  components: {
    Button,
    Select: selectTheme,
    Radio: radioTheme,
    Input: inputTheme,
    Tabs: tabsTheme,
    Accordion: accordionTheme,
    List: listTheme,
    Textarea: textareaTheme,
    Modal: modalTheme,
    FormLabel: formLabelTheme,
  },

  styles: {
    global: {
      "html, body": {
        backgroundColor: "theme.main-bg",
        // backgroundColor: "#f6fdfd",
        color: "#222",
        fontFamily: "var(--font-schoolbell)",
        scrollBehavior: "smooth !important",
      },

      "h1, h2, h3, h4, h5, h6": {
        fontFamily: "Open Sans",
        fontWeight: "700",
        color: "#222",
        display: "block",
      },

      h1: {
        fontSize: "36px",
        fontWeight: "800",
        letterSpacing: "0.9px",

        "@media (max-width: 768px)": {
          fontSize: "32px",
          letterSpacing: "0.8px",
        },

        "@media (max-width: 480px)": {
          fontSize: "28px",
          letterSpacing: "0.7px",
        },

        "@media (max-width: 360px)": {
          fontSize: "24px",
          letterSpacing: "0.6px",
        },

        "@media (max-width: 320px)": {
          fontSize: "20px",
          letterSpacing: "0.5px",
        },

        "@media (max-width: 280px)": {
          fontSize: "16px",
          letterSpacing: "0.4px",
        },
      },

      h2: {
        fontFamily: "var(--font-schoolbell)",
        fontSize: "36px",
        fontWeight: "400",
        letterSpacing: "3.06px",

        "@media (max-width: 768px)": {
          fontSize: "32px",
          letterSpacing: "2.72px",
        },

        "@media (max-width: 480px)": {
          fontSize: "28px",
          letterSpacing: "2.38px",
        },

        "@media (max-width: 360px)": {
          fontSize: "24px",
          letterSpacing: "2.04px",
        },

        "@media (max-width: 320px)": {
          fontSize: "20px",
          letterSpacing: "1.7px",
        },

        "@media (max-width: 280px)": {
          fontSize: "16px",
          letterSpacing: "1.36px",
        },
      },

      h3: {
        fontFamily: "Open Sans",
        fontSize: "20px",
        fontWeight: "800",
        letterSpacing: "0.8px",

        "@media (max-width: 768px)": {
          fontSize: "18px",
          letterSpacing: "0.72px",
        },

        "@media (max-width: 480px)": {
          fontSize: "16px",
          letterSpacing: "0.64px",
        },
      },
      h4: {
        fontFamily: "var(--font-schoolbell)",
        fontSize: "20px",
        fontWeight: "800",
        letterSpacing: "2.38",

        "@media (max-width: 768px)": {
          fontSize: "18px",
          letterSpacing: "2.14px",
        },

        "@media (max-width: 480px)": {
          fontSize: "16px",
          letterSpacing: "1.8px",
        },
      },

      ".b1": {
        fontFamily: "Open Sans",
        fontSize: "20px",
        fontWeight: "800",

        "@media (max-width: 768px)": {
          fontSize: "18px",
        },

        "@media (max-width: 480px)": {
          fontSize: "16px",
        },
      },

      ".b2": {
        fontSize: "20px",
        fontWeight: "400",
        letterSpacing: "1.7px",

        "@media (max-width: 768px)": {
          fontSize: "18px",
        },

        "@media (max-width: 480px)": {
          fontSize: "16px",
        },
      },

      ".b3": {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "160%",
        letterSpacing: "1.36px",
        fontFamily: "var(--font-schoolbell)",
      },

      ".b4": {
        fontFamily: "Open Sans",
        fontSize: "12px",
        fontWeight: "800",
      },

      ".b5": {
        fontFamily: "Open Sans",
        fontSize: "14px",
        fontWeight: "400",
      },

      "footer-h1": {
        fontFamily: "Open Sans",
        fontSize: "14px",
        fontWeight: "600",
        letterSpacing: "1.26px",
        textTransform: "uppercase",
      },

      "footer-b1": {
        fontFamily: "Open Sans",
        fontSize: "12px",
        fontWeight: "600",
        letterSpacing: "0.54px",
        textTransform: "uppercase",
      },

      "footer-font": {
        fontFamily: "Open Sans",
        fontSize: "16px",
        fontWeight: "700",
        letterSpacing: "0.54px",
        lineHeight: "24px",
        textTransform: "uppercase",
      },

      "fw-600": {
        fontWeight: "600",
      },
    },
  },
});
