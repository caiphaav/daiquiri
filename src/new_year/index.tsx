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
            width={"25%"}
            src={
              "https://sun9-42.userapi.com/sun9-85/impg/INTbM_qp1HFvY5QMdyzjWjCRiYoTX9eEd-Qqeg/DO450Ltp1qQ.jpg?size=238x295&quality=96&sign=d5e2005655b3812cfeb5daa09c003fe2&type=album"
            }
          />
          <SharedComponents.VerticalBox height={24} />
          <img
            width={"25%"}
            src={
              "https://sun9-42.userapi.com/sun9-73/impg/Sm07BlaKsbXSIK3K21x2Z0qYVWMdfOEZZWTxXw/oBs-d2t15Gc.jpg?size=241x293&quality=96&sign=159f3f6a3c21a8832420b72e586fd7b0&type=album"
            }
          />
          <SharedComponents.VerticalBox height={24} />
          <img
            width={"25%"}
            src={
              "https://sun9-42.userapi.com/sun9-56/impg/dfKbBT9_Fb-zhP07Y6rc1_eDvx3pnYmMI4XfGg/1vc4LM7DUr0.jpg?size=248x294&quality=96&sign=631884d4d88bc1893a40dc5bf4cb990c&type=album"
            }
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Text
            text={"Каждая из снегурочек руководит сбором одного вида подарков."}
            type={"md"}
            color={white}
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Text
            text={
              "Таким образом Малый подарок Вы сможете отдать Снегурочке Мери:"
            }
            type={"md"}
            color={white}
          />
          <SharedComponents.VerticalBox height={24} />
          <img
            width={"25%"}
            src={
              "https://sun9-42.userapi.com/sun9-23/impg/X4U00RLGqSJKpdjUdWUYxCBf-mBe1ngi6GTIKA/ZJV0ZGWOWCM.jpg?size=395x145&quality=96&sign=897800595e024c9d87f829ab062213bd&type=album"
            }
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Text
            text={
              "Список предметов, которые можно получить в награду от Снегурочки Мери за обмен малых подарков:"
            }
            type={"md"}
            color={white}
          />
          <SharedComponents.VerticalBox height={24} />
          <img
            width={"25%"}
            src={
              "https://sun9-42.userapi.com/sun9-69/impg/E2HJ_v7R6anV5upciFYSjQitZNneATtnlHhdNw/md5VfDzlQ7s.jpg?size=290x859&quality=96&sign=bff299958500834b29f19106e3ea5f9c&type=album"
            }
          />
          <img
            width={"25%"}
            src={
              "https://sun9-42.userapi.com/sun9-61/impg/9nmg5RsTrVksInZIzztJOqabUo_Byz-6vEhpRA/FQBWIDcPmsA.jpg?size=297x288&quality=96&sign=b5d4810d8c7f9cd85f4063e508c27d74&type=album"
            }
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Text
            text={"Желанный подарок сможете обменять у Снегурочки Мас:"}
            type={"md"}
            color={white}
          />
          <SharedComponents.VerticalBox height={24} />
          <img
            width={"25%"}
            src={
              "https://sun9-42.userapi.com/sun9-68/impg/cwkzjxHNnr3LOoHaETVknaCbZZOdhmt3opxYxQ/ru5Cp3hAd0I.jpg?size=394x175&quality=96&sign=2340b0c7416fb65173135985ca03e190&type=album"
            }
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Text
            text={
              "Список предметов, которые можно получить в награду от Снегурочки Мас за обмен Желанных подарков:"
            }
            type={"md"}
            color={white}
          />
          <SharedComponents.VerticalBox height={24} />
          <img
            width={"25%"}
            src={
              "https://sun9-42.userapi.com/sun9-83/impg/79gMz0aEwgSp2N3cH1Z0SoPCexzZTSxE3e8Pwg/SOKHFlsQqGY.jpg?size=290x447&quality=96&sign=7e348c05b7f9e9e0e8a85f3476b9bffb&type=album"
            }
          />
          <img
            width={"25%"}
            src={
              "https://sun9-42.userapi.com/sun9-44/impg/1PSdWt4BbTA-hejeD9aa0vF63JPt-KDQcmcNbA/GlBFo1OrsJE.jpg?size=297x446&quality=96&sign=d43a66a176354f9f164279c9f1d4949f&type=album"
            }
          />
          <img
            width={"25%"}
            src={
              "https://sun9-42.userapi.com/sun9-26/impg/y6cMzVQbJ_eI3gIjL9CXykbq8cLO5XNute_ruQ/Imu0wlPgOL8.jpg?size=286x448&quality=96&sign=61e5821f195540878ad3bcf08954361c&type=album"
            }
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Text
            text={"Изумрудный подарок с радостью обменяет Снегурочка Крис"}
            type={"md"}
            color={white}
          />
          <SharedComponents.VerticalBox height={24} />
          <img
            width={"25%"}
            src={
              "https://sun9-42.userapi.com/sun9-51/impg/8j-2Ry_WZpboz-bd3Z4RqDIlaUFirFr6sk_7eg/jcSAw5UFcWg.jpg?size=398x201&quality=96&sign=1f3091e1d691f3045ffae6d7b81299d0&type=album"
            }
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Text
            text={
              "Список предметов, которые можно получить в награду от Снегурочки Мас за обмен Изумрудных подарков:"
            }
            type={"md"}
            color={white}
          />
          <SharedComponents.VerticalBox height={24} />
          <img
            width={"25%"}
            src={
              "https://sun9-42.userapi.com/sun9-85/impg/1zP2xnQeohMS98IKmnRqtO6ho2RrI8qDjhLL1A/c5S0C8KcLnU.jpg?size=298x454&quality=96&sign=0f302a4bf127aa77d8812ed9f246d83c&type=album"
            }
          />
          <img
            width={"25%"}
            src={
              "https://sun9-42.userapi.com/sun9-79/impg/IChULDjTziNw1DJaDmoXlw6pd2CRQsk-AsY0Qw/hkts2ysUFlw.jpg?size=299x445&quality=96&sign=dd19fa498e4d04ae2c37182b0614ad75&type=album"
            }
          />
          <img
            width={"25%"}
            src={
              "https://sun9-42.userapi.com/sun9-88/impg/TcUUHnKfq6PQySyD_8OSm94mX51gYZMBefts8g/5Shok4n1pCo.jpg?size=300x212&quality=96&sign=3d1832bdfb476129e1cb0ea49c4d9bf5&type=album"
            }
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Text
            text={
              "Желаем всем успехов и хорошего лута, еще раз с Наступающим Вас, наше любимое комьюнити, впереди нас еще ждёт много интересного!)"
            }
            type={"md"}
            color={white}
          />
        </SharedComponents.Column>
        <SharedComponents.VerticalBox height={24} />
      </SharedComponents.Column>
      <SharedComponents.Footer />
    </SharedComponents.Screen>
  );
};
