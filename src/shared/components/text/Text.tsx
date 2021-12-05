import { FC, memo } from "react";
import "./index.css";

import { IText } from "./types";

export const Text: FC<IText> = memo(
  ({
    type = "",
    color = "#000",
    height,
    width,
    children,
    margin,
    padding,
    text,
    textAlign,
    ...rest
  }) => {
    return (
      <p
        className={type}
        style={{
          color,
          margin,
          padding,
          textAlign,
          whiteSpace: "pre-wrap",
          transition: "0.15s linear",
          ...rest,
        }}
      >
        {text}
      </p>
    );
  },
  (prevProps, nextProps) =>
    prevProps.text === nextProps.text && prevProps.color === nextProps.color
);
