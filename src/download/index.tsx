import { SharedComponents, Theme } from "@shared";

import * as DownloadComponents from "./components";

export const Download = () => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();

  return (
    <SharedComponents.Screen>
      <SharedComponents.Meta
        content={"https://daiquiri.top/download"}
        title={"Daiquiri - Скачать"}
      />
      <SharedComponents.NavBar />
      <DownloadComponents.Img
        src={"https://i.imgur.com/4FTLavO.jpg"}
        alt={"about"}
        width={"100%"}
      />
      <DownloadComponents.ResponsiveInner>
        <SharedComponents.Text
          text={"Скачать клиент по ссылке:"}
          type={"h1"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <a
          href={
            "https://drive.google.com/file/d/1nkIBo1bGzugqjPjiRhtm80W0xX8vWibn/view?usp=sharing"
          }
          target={"_blank"}
          rel={"noreferrer"}
        >
          <SharedComponents.Button title={"GOOGLE DRIVE"} />
        </a>
        <SharedComponents.VerticalBox height={24} />
        <a
          href={"https://disk.yandex.ru/d/eRjzHS_3z-qacA"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <SharedComponents.Button title={"YANDEX DISK"} />
        </a>
      </DownloadComponents.ResponsiveInner>
    </SharedComponents.Screen>
  );
};
