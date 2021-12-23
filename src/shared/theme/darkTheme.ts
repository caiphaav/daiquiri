import { ITheme } from "./types";

export const darkTheme: ITheme = {
  palette: {
    primary: "#17161c",
    secondary: "#100f14",
    white: "#e8e8e8",
    gray: "#a2a2a4",
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
