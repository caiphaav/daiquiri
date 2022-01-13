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
            "https://sun9-58.userapi.com/sun9-56/impg/ueiK87si7s-c5CR8NyOKzVWMys4rNiNRJkg6SA/hb_bs2tJY70.jpg?size=1359x1000&quality=96&sign=5edf8b5ba73ce3fa09a67e531863e229&type=album"
          }
          alt={""}
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
            text={"Patch Notes Part 2"}
            type={"h1"}
            color={white}
            textAlign={"center"}
          />
          <SharedComponents.VerticalBox height={16} />
          <SharedComponents.Text
            text={"Узнай подробности первым!"}
            type={"h2"}
            color={white}
          />
          <SharedComponents.VerticalBox height={32} />
          <SharedComponents.Button
            title={"Подробнее"}
            onClick={() =>
              navigate("/events/patch-31-12-2021", { replace: true })
            }
          />
        </div>
      </EQLib.Wrapper>
    </>
  );
};
