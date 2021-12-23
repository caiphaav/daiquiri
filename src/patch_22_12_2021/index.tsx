import { SharedComponents, Theme } from "@shared";

import { NEWS_DATA } from "./mock";

export const PATCH_22_12_2021 = () => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
      <SharedComponents.NavBar />
      <SharedComponents.Header
        thumbnail={
          "https://sun9-78.userapi.com/sun9-34/impg/OstUa3mnqNjPT-h9AG4V9nQ-ELkVEtC1_PdfLQ/xsp6juj5W3k.jpg?size=960x540&quality=96&sign=232a45869f774b4d2dd61bf3e4498f39&type=album"
        }
        title={"Патч 22.12.2021"}
      />
      <SharedComponents.Column padding={"64px 32px"}>
        <SharedComponents.Text
          text={"Патч 22.12.2021"}
          type={"h1"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.MarkedList data={NEWS_DATA} />
        <SharedComponents.VerticalBox height={24} />
      </SharedComponents.Column>
      <SharedComponents.Footer />
    </SharedComponents.Screen>
  );
};
