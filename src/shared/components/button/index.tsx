import * as ButtonLib from "./lib";
import { IButton } from "./types";

export const Button = ({ title, onClick, ...rest }: IButton) => {
  return (
    <ButtonLib.Wrapper {...rest} onClick={onClick}>
      <p>{title}</p>
    </ButtonLib.Wrapper>
  );
};
