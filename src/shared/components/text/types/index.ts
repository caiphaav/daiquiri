import { TypographyType } from "../../../theme";
import { Property } from "csstype";

export interface IText {
  type: TypographyType;
  text: string | number | Element | null;
  height?: string | number;
  width?: string | number;
  margin?: string | number;
  padding?: string | number;
  color?: string;
  textAlign?: Property.TextAlign;
}
