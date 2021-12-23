import { SharedComponents, Theme } from "@shared";

interface ISealedCaveBoss {
  name: string;
  description: string;
  src: string;
}

const BOSSES_INFO: Array<ISealedCaveBoss> = [
  {
    name: "Морена",
    description:
      "Богиня плодородия, жатвы и смерти. Прибыла на территорию Колфорт для выращивания плода силы, но была запечатана славными героями в «Пещере пиратов»",
    src: "https://sun9-78.userapi.com/sun9-74/impg/8WkN2oTGdAQmPBiRYa-HtFePTqCNa47AGeQM2g/5FuxjQN103Y.jpg?size=807x799&quality=96&sign=4d56fa03b8125b124dc09baf91a572d5&type=album",
  },
  {
    name: "Король огра Зомби",
    description:
      "Зловещая некромантия заставляет мёртвых подниматься в виде зомби, похоже это тело не из сего мира…",
    src: "https://sun9-78.userapi.com/sun9-37/impg/UJSQVYDcmjyHa6jPKT6-7mBZM8Yp2stPUG0gGA/zU2vuRhXZvY.jpg?size=672x749&quality=96&sign=58a0b20ccf1eec159e3745ba91deef25&type=album",
  },
  {
    name: "Дюрахан",
    description:
      "Злобный дух… От Дюрахана нельзя защититься какими-либо препятствиями — любые ворота и двери открываются перед ним",
    src: "https://sun9-78.userapi.com/sun9-74/impg/iCxyHabcbAyBCa0BU_YHAwUkH9ZDRdQ_7fKF_w/yBUTgPZqgKo.jpg?size=723x783&quality=96&sign=61b32fdba98c0e9378e470b774f12e5f&type=album",
  },
  {
    name: "Костяной Дракон",
    description:
      "Очень большой скелет. Абсолютно тупой, неспособный к полёту или выдыханию пламени. Но это не мешает ему пугать всех своим грозным видом и тем самым тешить свое же самолюбие.",
    src: "https://sun9-78.userapi.com/sun9-6/impg/OmejxKHcRmEpxmLvHF08ZbIN8MkgDQvi_2kPGw/wF7B5aNKXLI.jpg?size=807x454&quality=96&sign=5240b84a69de4946cee04789f5d1d4a2&type=album",
  },
];

const SealedCaveBoss = ({ name, description, src }: ISealedCaveBoss) => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <>
      <SharedComponents.VerticalBox height={48} />
      <SharedComponents.Text text={name} type={"lg"} color={white} />
      <SharedComponents.VerticalBox height={16} />
      <SharedComponents.Text text={description} type={"sm"} color={white} />
      <SharedComponents.VerticalBox height={16} />
      <img width={"60%"} src={src} />
      <SharedComponents.VerticalBox height={16} />
      <SharedComponents.Accordion
        data={[
          {
            title: "Mаг кровь",
            src: "https://sun9-78.userapi.com/sun9-6/impg/OmejxKHcRmEpxmLvHF08ZbIN8MkgDQvi_2kPGw/wF7B5aNKXLI.jpg?size=807x454&quality=96&sign=5240b84a69de4946cee04789f5d1d4a2&type=album",
          },
        ]}
      />
    </>
  );
};

export const SealedCave = () => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
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
        <img
          src={
            "https://sun9-78.userapi.com/sun9-51/impg/tADxoH4UN3XgbMj-7CoemKx4VIafRFtrAU0gaA/BliS0ENGst0.jpg?size=758x542&quality=96&sign=eccc51078597b0bdd261cb553fca07c2&type=album"
          }
          width={"100%"}
        />
        {BOSSES_INFO.map(({ description, name, src }) => (
          <SealedCaveBoss
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
