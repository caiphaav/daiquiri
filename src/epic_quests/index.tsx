import { SharedComponents, Theme } from "@shared";

import { QUESTS } from "./constants";
import { IEpicQuestsItem } from "./types";
import * as EpicQuestsComponents from "./components";

const renderItem = ({ src, title }: IEpicQuestsItem) => (
  <EpicQuestsComponents.Item title={title} src={src} key={title} />
);

export const EpicQuests = () => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
      <SharedComponents.NavBar />
      <SharedComponents.Header
        thumbnail={
          "https://r2wiki.ru/upload/pictures/2018/12/12/b8f45753e64562b9b967f28abbf80b8c.JPG"
        }
        title={"Награда за эпические квесты"}
      />
      <SharedComponents.Column padding={"64px 32px"}>
        <SharedComponents.Text
          text={"Награда за эпические квесты"}
          type={"h1"}
          color={white}
          textAlign={"center"}
        />
        <SharedComponents.VerticalBox height={16} />
        <SharedComponents.Text
          text={
            "Внимание: после достижения 90-ого уровня количество получаемого опыта значительно увеличено"
          }
          type={"md"}
          color={white}
        />
        {QUESTS.map(renderItem)}
      </SharedComponents.Column>
      <SharedComponents.Footer />
    </SharedComponents.Screen>
  );
};
