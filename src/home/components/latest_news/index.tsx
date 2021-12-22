import { SharedComponents, Theme, Types } from "@shared";

import { LAST_NEWS } from "../../mock";

const renderItem = (news: Types.INews) => (
  <SharedComponents.NewsItem key={news.id} item={news} />
);

export const LatestNews = () => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.ResponsiveWrapper>
      <SharedComponents.VerticalBox height={48} />
      <SharedComponents.Text text={"Новости:"} color={white} type={"h1"} />
      <SharedComponents.VerticalBox height={48} />
      {LAST_NEWS.map(renderItem)}
    </SharedComponents.ResponsiveWrapper>
  );
};
