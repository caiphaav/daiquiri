import { SharedComponents, Theme } from "@shared";

import { IEpicQuestsItem } from "../types";

export const Item = ({ title, src }: IEpicQuestsItem) => {
  const {
    palette: { gray },
  } = Theme.useStyledTheme();
  return (
    <>
      <SharedComponents.VerticalBox height={32} />
      <SharedComponents.Text text={title} type={"md"} color={gray} />
      <SharedComponents.VerticalBox height={16} />
      <img src={src} alt={title} />
    </>
  );
};
