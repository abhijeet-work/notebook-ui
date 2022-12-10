// styled.d.ts
import "@emotion/react";
import { EmotionThemeType } from "../styles/theme/lightTheme";

declare module "@emotion/react" {
  export interface Theme extends EmotionThemeType {}
}
