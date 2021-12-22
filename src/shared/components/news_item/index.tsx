import { SharedComponents, Theme, Types } from "@shared";

import * as NewsItemLib from "./lib";

interface INewsItem {
  item: Types.INews;
}

export const NewsItem = ({ item }: INewsItem) => {
  const {
    palette: { white, gray },
  } = Theme.useStyledTheme();
  return (
    <NewsItemLib.Wrapper>
      <NewsItemLib.Img src={item.thumbnail} />
      <SharedComponents.HorizontalBox width={48} />
      <SharedComponents.Column width={"100%"}>
        <SharedComponents.VerticalBox height={8} />
        <SharedComponents.Row
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <SharedComponents.Text text={item.title} type={"h2"} color={white} />
          <SharedComponents.HorizontalBox width={8} />
          <SharedComponents.Text
            textAlign={"right"}
            text={item.date}
            type={"sm"}
            color={gray}
          />
        </SharedComponents.Row>
        <SharedComponents.VerticalBox height={8} />
        <SharedComponents.Text
          type={"sm"}
          color={white}
          text={item.description}
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
