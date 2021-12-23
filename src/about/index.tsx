import { SharedComponents, Theme } from "@shared";

export const About = () => {
  const {
    palette: { pink },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
      <SharedComponents.NavBar />
      <img
        src={"6.jpeg"}
        alt={"about"}
        width={"100%"}
        style={{
          objectFit: "cover",
          objectPosition: "50% 50%",
          minHeight: "100vh",
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SharedComponents.Column
          flex={0}
          width={"fit-content"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <SharedComponents.Text text={"ДРОП"} type={"h1"} color={pink} />
          <SharedComponents.VerticalBox height={8} />
          <SharedComponents.Text text={"х20"} type={"h2"} color={"white"} />
        </SharedComponents.Column>
        <SharedComponents.HorizontalBox width={64} />
        <SharedComponents.Column
          flex={0}
          width={"fit-content"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <SharedComponents.Text text={"ОПЫТ"} type={"h1"} color={pink} />
          <SharedComponents.VerticalBox height={8} />
          <SharedComponents.Text text={"х40"} type={"h2"} color={"white"} />
        </SharedComponents.Column>
        <SharedComponents.HorizontalBox width={64} />
        <SharedComponents.Column
          flex={0}
          width={"fit-content"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <SharedComponents.Text text={"СЕРЕБРО"} type={"h1"} color={pink} />
          <SharedComponents.VerticalBox height={8} />
          <SharedComponents.Text text={"х1"} type={"h2"} color={"white"} />
        </SharedComponents.Column>
        <SharedComponents.HorizontalBox width={64} />
        <SharedComponents.Column
          flex={0}
          width={"fit-content"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <SharedComponents.Text text={"КВЕСТ"} type={"h1"} color={pink} />
          <SharedComponents.VerticalBox height={8} />
          <SharedComponents.Text text={"х5"} type={"h2"} color={"white"} />
        </SharedComponents.Column>
      </div>
      <SharedComponents.Footer />
    </SharedComponents.Screen>
  );
};
