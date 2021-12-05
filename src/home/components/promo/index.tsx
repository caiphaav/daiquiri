import * as PromoLib from "./lib";

import { SharedComponents, Theme } from "@shared";

export const Promo = () => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Column height={"860px"}>
      <PromoLib.Img src={"6.jpeg"} />
      <PromoLib.Wrapper>
        <PromoLib.Inner>
          <SharedComponents.Text color={white} text={"DAIQUIRI:"} type={"h1"} />
          <SharedComponents.VerticalBox height={8} />
          <SharedComponents.Text
            color={white}
            text={"ТВОЙ ПРОВОДНИК В МИР R2 ONLINE"}
            type={"h1"}
          />
          <SharedComponents.VerticalBox height={48} />
          <SharedComponents.Text
            text={"Мир где каждый может стать героем"}
            type={"xs"}
            color={white}
          />
          <SharedComponents.VerticalBox height={48} />
          <SharedComponents.Button title={"Подробнее"} />
        </PromoLib.Inner>
      </PromoLib.Wrapper>
    </SharedComponents.Column>
  );
};
