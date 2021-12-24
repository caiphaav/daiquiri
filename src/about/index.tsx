import { SharedComponents, Theme } from "@shared";

import * as AboutComponents from "./components";
import { DROP } from "./mock";

export const About = () => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();

  return (
    <SharedComponents.Screen>
      <SharedComponents.Meta
        content={"https://daiquiri.top/about"}
        title={"Daiquiri - О сервере"}
      />
      <SharedComponents.NavBar />
      <img
        src={
          "https://c.wallhere.com/photos/ba/f0/2560x1600_px_fantasy_Art_Heroes_video_games_warcraft-665230.jpg!d"
        }
        alt={"about"}
        width={"100%"}
        style={{
          objectFit: "cover",
          minHeight: "100vh",
          opacity: 0.5,
        }}
      />
      <AboutComponents.ResponsiveWrapper>
        <AboutComponents.ResponsiveInner>
          <SharedComponents.Text
            text={
              "Daiquiri Games - это команда опытных специалистов, которая предлагает своему комьюнити качественный сервис для комфортной и бесконечно захватывающей игры только на наших серверах.\n"
            }
            type={"md"}
            color={white}
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Text
            text={"На сервере Daiquiri установлены следующие рейтинги:"}
            type={"md"}
            color={white}
          />
          <SharedComponents.MarkedList data={DROP} />
        </AboutComponents.ResponsiveInner>
      </AboutComponents.ResponsiveWrapper>
    </SharedComponents.Screen>
  );
};
