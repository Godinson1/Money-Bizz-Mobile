import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

/*
 * Theme Definition
 *********************************************************
 *********************************************************
 */
const customDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: "#ffffff",
    text: "#333333",
    primary: "#002978",
  },
};

const customDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: "black",
    text: "#ffffff",
    primary: "#002978",
  },
};

/*
 **********************************************************
 ***********************************************************
 */

export const COLORS = {
  black: "#000000",
  white: "#ffffff",
  primary: "#002978",
  gray: "#C4C4C4",
  lightPrimary: "#415D93",
};

export const SIZES = {
  base: 8,
  padding: 24,
  font: 14,
  radius: 4,
  h1: 30,
  h2: 22,
  h3: 17,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 12,
  width,
  height,
};

export const FONTS = {
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.h1, lineHeight: 36 },
  body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.h2, lineHeight: 30 },
  body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.h3, lineHeight: 22 },
  body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.h4, lineHeight: 22 },
};

/*
 **********************************************************
 ***********************************************************
 */

const appTheme = { customDarkTheme, customDefaultTheme, FONTS, SIZES, COLORS };

export default appTheme;
