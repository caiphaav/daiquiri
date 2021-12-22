import * as PromoLib from "./lib";

import { SharedComponents, Theme } from "@shared";

export const Promo = () => {
  const {
    palette: { white, pink },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Column height={"800px"}>
      <PromoLib.Img src={"6.jpeg"} />
      <PromoLib.Wrapper>
        <SharedComponents.Column justifyContent={"center"}>
          <SharedComponents.ResponsiveWrapper>
            <SharedComponents.Text
              color={white}
              text={"DAIQUIRI:"}
              type={"h1"}
            />
            <SharedComponents.VerticalBox height={8} />
            <SharedComponents.Text
              color={white}
              text={"ТВОЙ ПРОВОДНИК В МИР R2 ONLINE"}
              type={"h1"}
            />
            <SharedComponents.VerticalBox height={48} />
            <SharedComponents.Text
              text={"Мир где каждый может стать героем"}
              type={"h2"}
              color={pink}
            />
            <SharedComponents.VerticalBox height={48} />
            <SharedComponents.Button title={"Подробнее"} />
          </SharedComponents.ResponsiveWrapper>
        </SharedComponents.Column>
      </PromoLib.Wrapper>
    </SharedComponents.Column>
  );
};
