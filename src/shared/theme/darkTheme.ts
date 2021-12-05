import { ITheme } from "./types";

export const darkTheme: ITheme = {
  palette: {
    primary: "#080325",
    secondary: "rgba(8,3,37,.9)",
    white: "#ffffff",
    gray: "#545454",
    pink: "#d92b4c",
  },
  breakpoints: {
    iphoneX: "375px",
    pixel: "411px",
    ipad: "768px",
    ipadPro: "1024px",
    medium: "1400px",
    fullHD: "1920px",
    qHD: "2560px",
    up: (breakpoint: string, vertical = false) =>
      `@media (min-${
        vertical ? "height" : "width"
      }: calc(${breakpoint} + 0.02px))`,
    down: (breakpoint: string, vertical = false) =>
      `@media (max-${vertical ? "height" : "width"}: ${breakpoint})`,
    between: (breakpointMin: string, breakpointMax: string, vertical = false) =>
      `@media (max-${
        vertical ? "height" : "width"
      }: ${breakpointMax}) and (min-${
        vertical ? "height" : "width"
      }: calc(${breakpointMin} + 0.02px))`,
  },
};
