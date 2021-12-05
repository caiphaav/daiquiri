import { SharedComponents, Theme } from "@shared";

import * as NewsItemLib from "./lib";

export const NewsItem = () => {
  const {
    palette: { white, gray },
  } = Theme.useStyledTheme();
  return (
    <NewsItemLib.Wrapper>
      <NewsItemLib.Img src={"8.jpeg"} />
      <SharedComponents.HorizontalBox width={48} />
      <SharedComponents.Column width={"100%"}>
        <SharedComponents.VerticalBox height={8} />
        <SharedComponents.Row
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <SharedComponents.Text
            text={"Обновление #2"}
            type={"h2"}
            color={white}
          />
          <SharedComponents.HorizontalBox width={8} />
          <SharedComponents.Text
            textAlign={"right"}
            text={"21 марта, 2021г."}
            type={"sm"}
            color={gray}
          />
        </SharedComponents.Row>
        <SharedComponents.VerticalBox height={8} />
        <SharedComponents.Text
          type={"sm"}
          color={white}
          text={
            "Locutus est tibi? Respondeo dicendum esset iustus? Quæ? Quem populum? Mensis abhinc Gus occidere vellet uterque. Et nunc, utatur LAB et trahit vos de ... quae ... a socio gunman? A lenta guy? Numquid aliquo tibi Et dicit quod videt te. Qualis est is lascivio venatus. Putat quod surdus es? Non potest vere putes quod"
          }
        />
        <SharedComponents.VerticalBox height={16} />
        <SharedComponents.Button
          title={"Подробнее"}
          paddingHorizontal={24}
          paddingVertical={8}
        />
      </SharedComponents.Column>
    </NewsItemLib.Wrapper>
  );
};
