import { useNavigate } from "react-router-dom";

import { SharedComponents, Theme } from "@shared";

import * as EQLib from "./lib";

export const EpicQuests = () => {
  const navigate = useNavigate();
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <EQLib.Wrapper>
      <EQLib.Img
        src={
          "https://r2wiki.ru/upload/pictures/2018/12/12/b8f45753e64562b9b967f28abbf80b8c.JPG"
        }
      />
      <div
        style={{
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SharedComponents.Text
          text={"Награда за эпические квесты"}
          type={"h1"}
          color={white}
          textAlign={"center"}
        />
        <SharedComponents.VerticalBox height={16} />
        <SharedComponents.Text
          text={"Получи опыт после 90+"}
          type={"h2"}
          color={white}
        />
        <SharedComponents.VerticalBox height={32} />
        <SharedComponents.Button
          title={"Подробнее"}
          onClick={() => navigate("/events/epic-quests", { replace: true })}
        />
      </div>
    </EQLib.Wrapper>
  );
};
