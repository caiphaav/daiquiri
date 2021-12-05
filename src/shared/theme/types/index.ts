export interface IPalette {
  primary: string;
  secondary: string;
  white: string;
  gray: string;
  pink: string;
}

export type TypographyType = "h1" | "h2" | "lg" | "md" | "sm" | "xs";

export interface ITheme {
  palette: IPalette;
  breakpoints: IBreakpoints;
}

export interface IBreakpoints {
  iphoneX: string;
  pixel: string;
  ipad: string;
  ipadPro: string;
  medium: string;
  fullHD: string;
  qHD: string;
  up: (b: string, v: boolean) => string;
  down: (b: string, v: boolean) => string;
  between: (bMin: string, bMax: string, v: boolean) => string;
}
