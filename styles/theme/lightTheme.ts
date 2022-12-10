import { green, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const emotionLightTheme = {
  colors: {
    primary: green[700],
    grey: grey[600],
    lightGrey: grey[200],
  },
  backgrounds: {
    body: "#F6F9FC",
    header: "#FFFFFF",
  },
  border: {
    gray: "#9e9e9e",
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: emotionLightTheme.colors.primary,
    },
    background: {
      default: emotionLightTheme.backgrounds.body,
    },
  },
});

export type EmotionThemeType = typeof emotionLightTheme;
export type MuiThemeType = typeof lightTheme;
