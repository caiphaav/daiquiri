import { SharedComponents, Theme } from "@shared";
import styled from "styled-components";

export const ResponsiveWrapper = styled.div(
  ({ theme }) => `
  
  position: absolute;
  width: 100%; 
  height: 100vh; 
  z-index: 1000;
  top: 0;
  left: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
);

export const Download = () => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
      <SharedComponents.NavBar />
      <img
        src={"download.jpg"}
        alt={"about"}
        width={"100%"}
        style={{
          objectFit: "cover",
          minHeight: "100vh",
          opacity: 0.5,
        }}
      />
      <ResponsiveWrapper>
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
        >
          <SharedComponents.Button title={"GOOGLE DRIVE"} />
        </a>
      </ResponsiveWrapper>
    </SharedComponents.Screen>
  );
};
