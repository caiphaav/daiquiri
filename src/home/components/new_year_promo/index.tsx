import { useNavigate } from "react-router-dom";

import { SharedComponents, Theme } from "@shared";

import * as EQLib from "./lib";

export const NewYearPromo = () => {
  const navigate = useNavigate();
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <>
      <SharedComponents.ResponsiveWrapper>
        <SharedComponents.VerticalBox height={64} />
        <SharedComponents.Text
          text={"События сервера:"}
          type={"h1"}
          color={white}
        />
        <SharedComponents.VerticalBox height={64} />
      </SharedComponents.ResponsiveWrapper>
      <EQLib.Wrapper>
        <EQLib.Img
          src={
            "https://media.discordapp.net/attachments/898707711846387712/923553084947431504/22-12-2021_010926.jpg"
          }
          alt={"new year"}
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
            text={"«Новогоднее безумие»"}
            type={"h1"}
            color={white}
            textAlign={"center"}
          />
          <SharedComponents.VerticalBox height={16} />
          <SharedComponents.Text
            text={"Празднуем Новый год вместе!"}
            type={"h2"}
            color={white}
          />
          <SharedComponents.VerticalBox height={32} />
          <SharedComponents.Button
            title={"Подробнее"}
            onClick={() => navigate("/events/new-year", { replace: true })}
          />
        </div>
      </EQLib.Wrapper>
    </>
  );
};
