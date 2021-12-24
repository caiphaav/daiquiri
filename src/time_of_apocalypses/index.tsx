import { SharedComponents, Theme } from "@shared";

import { INGREDIENTS, LOCATIONS, POTIONS } from "./mock";

export const TimeOfApocalypses = () => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
      <SharedComponents.Meta
        content={"https://daiquiri.top/events/time-of-apocalypses"}
        title={"Daiquiri - Время Апокалипсиса"}
      />
      <SharedComponents.NavBar />
      <SharedComponents.Header
        thumbnail={
          "https://sun9-78.userapi.com/sun9-28/impg/AnWVKXfBEMzKrt_An5HjX7XLl6cbq0IDzJ7HZA/5q5C2bjat0I.jpg?size=483x360&quality=96&sign=3e27e4b3527e18f345108dca4ef96617&type=album"
        }
        title={"Ивент «Время Апокалипсиса»"}
      />
      <SharedComponents.Column padding={"64px 32px"}>
        <SharedComponents.Text
          text={
            "30.11.2021 на сервере Daiquiri стартует игровое событие «Время Апокалипсиса», который продлится продлится до 14.12.2021."
          }
          type={"h1"}
          color={white}
        />
        <SharedComponents.VerticalBox height={48} />
        <SharedComponents.Text
          text={"Часть-1 «Варка зелий»"}
          type={"lg"}
          color={white}
        />
        <SharedComponents.VerticalBox height={36} />
        <SharedComponents.Text
          text={
            "На территорию Колфорт пришла «Великая ведьма» чтобы получить «Великолепный эликсир» имеющий молодящий эффект."
          }
          type={"md"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <img
          src={
            "https://sun9-42.userapi.com/sun9-6/impg/BKawrki2--pP4GrMzzYKN5U4O1yBlKCbIANcoQ/i7sEflardSc.jpg?size=46x46&quality=96&sign=cd4da684380e4a02bb149e881bc648fe&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          text={
            "Для создания великолепного эликсира потребуются ингредиенты которые можно получить охотясь на монстров."
          }
          type={"md"}
          color={white}
        />
        <SharedComponents.Text
          text={"С монстров можно добыть следующие итемы:"}
          type={"md"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Accordion data={INGREDIENTS} title={"Ингридиенты"} />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          text={"Локации из которых можно добыть ивент итемы:"}
          type={"md"}
          color={white}
        />
        <SharedComponents.MarkedList data={LOCATIONS} />
        <SharedComponents.Text
          text={
            "«Великая ведьма» прихватила с собой «Котёл Ведьмы» в котором вам предстоит варить зелья.\n" +
            "Добыв нужные ингредиенты вам предложат несколько рецептов из которых возможно приготовить «Великолепный эликсир».\n" +
            "Какой именно из рецептов использовать, зависит от вас."
          }
          type={"md"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          text={"Вариации приготовления зелий:"}
          type={"md"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <img
          src={
            "https://sun9-42.userapi.com/sun9-2/impg/8Fz0Io3p5lDIs9YnBCSyrnEHcTFFvPfKe9NqyA/MqqOC6uT1YU.jpg?size=307x340&quality=96&sign=71b9cf68ac201eaeac044176d54a5724&type=album"
          }
          width={"30%"}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          text={
            "При неудачной попытке приготовления великолепного эликсира у вас будет получаться одно из зелий представленных в списке:"
          }
          type={"md"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Accordion data={POTIONS} title={"Зелья"} />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          text={
            "Получив «Великолепный эликсир» ведьма вам предложит обменять на следующие предметы:"
          }
          type={"md"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <img
          src={
            "https://sun9-42.userapi.com/sun9-73/impg/346zJXTzYfBlG9bzMVttGysmVgRtNd3cxFVzhQ/AYmjAF243Bg.jpg?size=326x512&quality=96&sign=33263e0fccca4ad289a3f0aa524b4377&type=album"
          }
          width={"30%"}
        />
        <SharedComponents.VerticalBox height={24} />
        <img
          src={
            "https://sun9-42.userapi.com/sun9-69/impg/9izwvRxP8M5f-diCDVOnkMGXp_X-U6-PqxFqEw/N4VDFEQO3IQ.jpg?size=313x473&quality=96&sign=c1d7a8d2af78eb7126780d8c7d5d49ac&type=album"
          }
          width={"30%"}
        />
        <SharedComponents.VerticalBox height={24} />
        <a
          href={
            "https://vk.com/@daiquiri_games-ivent-vremya-apokalipsisa-na-servere-daiquiri"
          }
          rel="noreferrer"
          target={"_blank"}
        >
          Подробнее по ссылке:
        </a>
      </SharedComponents.Column>
      <SharedComponents.Footer />
    </SharedComponents.Screen>
  );
};
