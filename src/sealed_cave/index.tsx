import { SharedComponents, Theme } from "@shared";

import { BOSSES_INFO } from "./mock";
import * as Components from "./components";

export const SealedCave = () => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
      <SharedComponents.Meta
        content={"https://daiquiri.top/events/sealed-cave"}
        title={"Daiquiri - Боссы в Запечатанных пещерах"}
      />
      <SharedComponents.NavBar />
      <SharedComponents.Header
        thumbnail={
          "https://sun9-78.userapi.com/sun9-51/impg/tADxoH4UN3XgbMj-7CoemKx4VIafRFtrAU0gaA/BliS0ENGst0.jpg?size=758x542&quality=96&sign=eccc51078597b0bdd261cb553fca07c2&type=album"
        }
        title={"Боссы в Запечатанных пещерах"}
      />
      <SharedComponents.Column padding={"64px 32px"}>
        <SharedComponents.Text
          text={"Боссы в Запечатанных пещерах"}
          type={"h1"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          text={
            "На сервер Daiquiri добавлено 4 новых босса. Каждый из них расположен по комнатам в Запечатанных пещерах пирата 2ур. Время возрождения боссов аналогично Урук-Хаю"
          }
          type={"md"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          alt={""}
          src={
            "https://sun9-78.userapi.com/sun9-51/impg/tADxoH4UN3XgbMj-7CoemKx4VIafRFtrAU0gaA/BliS0ENGst0.jpg?size=758x542&quality=96&sign=eccc51078597b0bdd261cb553fca07c2&type=album"
          }
        />
        {BOSSES_INFO.map(({ description, name, src, data }) => (
          <Components.Boss
            data={data}
            key={name}
            name={name}
            description={description}
            src={src}
          />
        ))}
      </SharedComponents.Column>
      <SharedComponents.Footer />
    </SharedComponents.Screen>
  );
};
