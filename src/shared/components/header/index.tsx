import { SharedComponents, Theme } from "@shared";

import * as HeaderLib from "./lib";

interface IHeader {
  thumbnail: string;
  title: string;
}

export const Header = ({ thumbnail, title }: IHeader) => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <HeaderLib.Wrapper>
      <HeaderLib.Img src={thumbnail} />
      <HeaderLib.Inner>
        <SharedComponents.Text
          text={title}
          type={"h2"}
          color={white}
          textAlign={"center"}
        />
      </HeaderLib.Inner>
    </HeaderLib.Wrapper>
  );
};
