import * as PromoLib from "./lib";

import { SharedComponents, Theme } from "@shared";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const Promo = () => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();

  const navigation = useNavigate();

  const goToAboutPage = useCallback(() => navigation("about"), [navigation]);

  return (
    <SharedComponents.Column height={"800px"}>
      <PromoLib.Img src={"6.webp"} />
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
              text={"‟Мир, где каждый может стать героем”"}
              type={"h2ItalicGlow"}
              color={white}
            />
            <SharedComponents.VerticalBox height={48} />
            <SharedComponents.Button
              title={"Подробнее"}
              onClick={goToAboutPage}
            />
          </SharedComponents.ResponsiveWrapper>
        </SharedComponents.Column>
      </PromoLib.Wrapper>
    </SharedComponents.Column>
  );
};
