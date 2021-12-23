import { SharedComponents, Theme } from "@shared";

interface IEpicQuestsItem {
  title: string;
  src: string;
}

const EpicQuestsItem = ({ title, src }: IEpicQuestsItem) => {
  const {
    palette: { gray },
  } = Theme.useStyledTheme();
  return (
    <>
      <SharedComponents.VerticalBox height={32} />
      <SharedComponents.Text text={title} type={"md"} color={gray} />
      <SharedComponents.VerticalBox height={16} />
      <img src={src} alt={title} />
    </>
  );
};

const QUESTS: Array<IEpicQuestsItem> = [
  {
    title: "- Атака гноллов:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897917685780869180/unknown.png",
  },
  {
    title: "- Хочу на пикник:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897918122491772958/unknown.png",
  },
  {
    title: "- Времени хватит:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897918411865227284/unknown.png",
  },
  {
    title: "- Боящийся страж:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897918796340273172/unknown.png",
  },
  {
    title: "- Путь для передачи:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897919142831722556/unknown.png",
  },
  {
    title: "- Последний житель:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897919402320752740/unknown.png",
  },
  {
    title: "- Очень темно:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897920488792289290/unknown.png",
  },
  {
    title: "- Я бы в продавцы пошёл:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897920985527889930/unknown.png",
  },
  {
    title: "- Воскрешение короля:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897921247726428210/unknown.png",
  },
  {
    title: "- Атака на входе:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897921921633636402/unknown.png",
  },
  {
    title: "- Во искупление вины:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897922924286197770/unknown.png",
  },
  {
    title: "- Очищение ОЭ:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897923394203426877/unknown.png",
  },
  {
    title: "- Сковать энергия Метеоса:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897923745291841537/unknown.png",
  },
  {
    title: "- Опасная сделка:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897924318393159741/unknown.png",
  },
  {
    title: "- Во имя мести:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897924393722851439/unknown.png",
  },
  {
    title: "- Уничтожение солдат Танатоса:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897925250984075344/unknown.png",
  },
  {
    title: "- Рыцари гвардейцы Рарки:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897925652324446240/unknown.png",
  },
  {
    title: "- Останки Баалбека:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897925902573371472/unknown.png",
  },
  {
    title: "- Останки Баалбека:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897925902573371472/unknown.png",
  },
  {
    title: "- Останки Юпитера:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897925963109773322/unknown.png",
  },
  {
    title: "- За святую землю Иллюмина:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897927857559449660/unknown.png",
  },
  {
    title: "- Голос из глубокой тьмы:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897928089064058941/unknown.png",
  },
  {
    title: "- Симфония пламени и шторма:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897928295285407784/unknown.png",
  },
  {
    title: "- Эхо метрвых:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897928538047533126/unknown.png",
  },
  {
    title: "- Останки падшего короля:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897928759490002964/unknown.png",
  },
  {
    title: "- Причина заражения:",
    src: "https://media.discordapp.net/attachments/891435616938647583/897928967707852810/unknown.png",
  },
];

export const EpicQuests = () => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
      <SharedComponents.NavBar />
      <SharedComponents.Header
        thumbnail={"13.jpeg"}
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
        {QUESTS.map(({ src, title }) => (
          <EpicQuestsItem title={title} src={src} key={title} />
        ))}
      </SharedComponents.Column>
      <SharedComponents.Footer />
    </SharedComponents.Screen>
  );
};
