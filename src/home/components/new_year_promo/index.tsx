import { SharedComponents, Theme } from "@shared";

import * as LocalComponents from "./lib";

export const NewYearPromo = () => {
  const {
    palette: { white, pink },
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
      <LocalComponents.Wrapper>
        <LocalComponents.Img
          src={
            "https://sun9-67.userapi.com/impg/3yJ8MjagF1w9M7s6yY2qJ4LXZKI5-59yt5gkjA/_T_wMdjAsMQ.jpg?size=1919x1079&quality=95&sign=0490c628273c9c79339f2a9fe033e347&type=album"
          }
          alt={""}
        />
        <LocalComponents.Inner>
          <SharedComponents.Text
            text={'Обновление "New Era Part 1" by Pennywise'}
            type={"h1"}
            color={white}
            textAlign={"center"}
          />
          <SharedComponents.VerticalBox height={16} />
          <SharedComponents.Text
            text={"Уникальный мир полный волшебства"}
            type={"h2"}
            color={white}
          />
          <SharedComponents.VerticalBox height={32} />
          <a
            href="https://forum.daiquiri.top/d/2-obnovlenie-new-era-part-1"
            rel={"noreferrer"}
          >
            <SharedComponents.Button title={"Подробнее"} />
          </a>
        </LocalComponents.Inner>
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: pink,
            padding: 8,
          }}
        >
          <SharedComponents.Text
            color={white}
            type={"md"}
            text="Предстоящее событие"
          />
        </div>
      </LocalComponents.Wrapper>
    </>
  );
};
