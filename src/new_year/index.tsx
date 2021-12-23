import { SharedComponents, Theme } from "@shared";

import { PRESENTS, ITEMS, LOCATIONS, GIFTS } from "./mock";

export const NewYear = () => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
      <SharedComponents.NavBar />
      <SharedComponents.Header
        thumbnail={
          "https://media.discordapp.net/attachments/898707711846387712/923553084947431504/22-12-2021_010926.jpg"
        }
        title={"Ивент «Новогоднее безумие»"}
      />
      <SharedComponents.Column minHeight={"960px"}>
        <SharedComponents.Column padding={"64px 32px"}>
          <SharedComponents.Text
            text={"Ивент «Новогоднее безумие»"}
            type={"h1"}
            color={white}
          />
          <SharedComponents.VerticalBox height={48} />
          <SharedComponents.Text
            text={
              "Команда Дайкири поздравляет всех с Наступающим 2022 Новым Годом!"
            }
            type={"lg"}
            color={white}
          />
          <SharedComponents.Text
            text={
              "В связи с чем, на сервер Дайкири было установлено игровое событие «Новогоднее Безумие» в рамках которого каждый игрок сможет получить приятный подарок и принять участие в лотерее призов!\n"
            }
            type={"lg"}
            color={white}
          />
          <SharedComponents.VerticalBox height={36} />
          <SharedComponents.Text
            text={
              "Каждый игрок в честь нового года может получить Новогодний подарок в виде:"
            }
            type={"md"}
            color={white}
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Accordion
            data={PRESENTS}
            title={"Список подарков"}
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Text
            text={
              "Подарок можно получить в городе Эшборн у снегурочки Мери. Все предметы выданные снегурочкой имеют статус «непередаваемый предмет»"
            }
            type={"md"}
            color={white}
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Text
            text={
              "В городе Эшборн игроки смогут обнаружить огромную новогоднюю ёлку рядом с которой расположены 3 снегурочки, которые в свою очередь пришли помогать собирать подарки, украшение и создавать новогоднюю атмосферу в мире Колфорта"
            }
            type={"md"}
            color={white}
          />
          <SharedComponents.VerticalBox height={24} />
          <img
            width={"100%"}
            src={
              "https://sun9-42.userapi.com/sun9-12/impg/_yphl6kiUZYchdITaknP76iWyW0Hyy4opkK9aw/SMWHKmpnty8.jpg?size=934x640&quality=96&sign=046651fc78758f8fdfda6e2aa2a8a41c&type=album"
            }
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Text
            text={
              "Но часть украшений и материалов для создания подарков была украдена монстрами и именно их Вам предстоит отыскать, чтобы затем вернуть снегурочкам за приятное вознаграждение!.Для создания подарков необходимы следующие ингредиенты:"
            }
            type={"md"}
            color={white}
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Accordion
            data={ITEMS}
            title={"Список материалов и украшений"}
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Text
            text={"Локации в которых можно добыть ингредиенты:"}
            type={"md"}
            color={white}
          />
          <SharedComponents.MarkedList data={LOCATIONS} />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Text
            text={"Всего есть 3 вида подарков:"}
            type={"md"}
            color={white}
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Accordion data={GIFTS} title={"Список подарков"} />
          <SharedComponents.VerticalBox height={24} />
          <img
            width={"30%"}
            src={
              "https://sun9-42.userapi.com/sun9-85/impg/INTbM_qp1HFvY5QMdyzjWjCRiYoTX9eEd-Qqeg/DO450Ltp1qQ.jpg?size=238x295&quality=96&sign=d5e2005655b3812cfeb5daa09c003fe2&type=album"
            }
          />
          <SharedComponents.VerticalBox height={24} />
          <img
            width={"30%"}
            src={
              "https://sun9-42.userapi.com/sun9-73/impg/Sm07BlaKsbXSIK3K21x2Z0qYVWMdfOEZZWTxXw/oBs-d2t15Gc.jpg?size=241x293&quality=96&sign=159f3f6a3c21a8832420b72e586fd7b0&type=album"
            }
          />
          <SharedComponents.VerticalBox height={24} />
          <img
            width={"30%"}
            src={
              "https://sun9-42.userapi.com/sun9-56/impg/dfKbBT9_Fb-zhP07Y6rc1_eDvx3pnYmMI4XfGg/1vc4LM7DUr0.jpg?size=248x294&quality=96&sign=631884d4d88bc1893a40dc5bf4cb990c&type=album"
            }
          />
          <SharedComponents.VerticalBox height={24} />
        </SharedComponents.Column>
        <SharedComponents.VerticalBox height={24} />
      </SharedComponents.Column>
      <SharedComponents.Footer />
    </SharedComponents.Screen>
  );
};
