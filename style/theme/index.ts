/**
 * @description 전역 스타일링에 사용하는 테마, 맨 밑줄만 변경해서 사용
 */
import { extendTheme } from "@chakra-ui/react";

const common = {
  primary: "#65BAFA",
  black100: "rgba(0, 0, 0, 1)",
  black36: "rgba(0, 0, 0, 0.36)",
  black10: "rgba(0, 0, 0, 0.1)",
  black6: "rgba(0, 0, 0, 0.06)",
  gray700: "#2d3748",
  gray600: "#4a5568",
  gray500: "#718096",
  gray400: "#a0aec0",
  gray300: "#cbd5e0",
  gray200: "#e2e8f0",
  gray100: "#edf2f7",
};

const chakra = {
  colors: {
    chakraPrimary: {
      500: "#65BAFA",
    },
    chakraBlack4: {
      500: " rgba(0,0,0,0.04)",
    },
    chakraGray: {
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
    },
    red: {
      500: "#FC8181",
    },
    green: {
      500: "#00FFFF",
    },
    teal: {
      500: "#00FF00",
    },
  },
};

const makeTheme = () => {
  switch (process.env.THEME) {
    case "default":
      return { ...common, chakra };
    default:
      return { ...common, chakra };
  }
};

// 테마 바꿀 때는 여기만 변경해주면 됨
export const theme = makeTheme();

// 차크라로 export
export const extendedTheme = extendTheme(theme);
