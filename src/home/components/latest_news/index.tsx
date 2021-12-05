import { SharedComponents, Theme } from "@shared";

import { NewsItem } from "./news_item";

export const LatestNews = () => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.ResponsiveWrapper>
      <SharedComponents.VerticalBox height={48} />
      <SharedComponents.Text text={"Новости:"} color={white} type={"h1"} />
      <SharedComponents.VerticalBox height={48} />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </SharedComponents.ResponsiveWrapper>
  );
};
