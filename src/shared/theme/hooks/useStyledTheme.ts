import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { ITheme } from "../types";

export const useStyledTheme = (): ITheme => {
  const theme: ITheme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("ThemeContext is not defined");
  }

  return theme;
};
