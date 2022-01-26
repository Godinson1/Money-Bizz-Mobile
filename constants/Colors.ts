import { COLORS } from "./index";

const tintColorLight = COLORS.primary;
const tintColorDark = COLORS.white;

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "gray",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: COLORS.primary,
    background: "#fff",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};
