import { SharedComponents, Theme } from "@shared";
import styled from "styled-components";

export const ResponsiveWrapper = styled.div(
  ({ theme }) => `
  
  display: flex;
  flex-direction: column; 
  padding: 0 16px;
  position: absolute;
  top: 128px;
   
  ${theme.breakpoints.up(theme.breakpoints.iphoneX)} {
    padding: 0 32px;
  }    
  
  ${theme.breakpoints.up(theme.breakpoints.pixel)} {
    padding: 0 32px;
  }    
  
  ${theme.breakpoints.up(theme.breakpoints.ipad)} {
     padding: 0 32px;
  }    
  
  ${theme.breakpoints.up(theme.breakpoints.ipadPro)} {
     padding: 0 32px;
  }  
  
  ${theme.breakpoints.up(theme.breakpoints.medium)} {
     padding: 0 32px;
  }     
`
);

export const ResponsiveInner = styled.div(
  ({ theme }) => `
  
  width: 100%;
  height: 512px;
  background: rgba(255, 255, 255, 0.14);
  box-shadow: rgba(255, 255, 255, 0.44) 0px 25px 50px -12px;
  padding: 32px;
   
   
  ${theme.breakpoints.up(theme.breakpoints.ipad)} {
     width: 80%;
  }    
  
  ${theme.breakpoints.up(theme.breakpoints.ipadPro)} {
     width: 60%;
  }     
  
  ${theme.breakpoints.up(theme.breakpoints.medium)} {
     width: 50%;
  } 
  ${theme.breakpoints.up(theme.breakpoints.medium)} {
     width: 40%;
  }   
   
`
);

export const About = () => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
      <SharedComponents.NavBar />
      <img
        src={
          "https://c.wallhere.com/photos/ba/f0/2560x1600_px_fantasy_Art_Heroes_video_games_warcraft-665230.jpg!d"
        }
        alt={"about"}
        width={"100%"}
        style={{
          objectFit: "cover",
          minHeight: "100vh",
          opacity: 0.5,
        }}
      />
      <ResponsiveWrapper>
        <ResponsiveInner>
          <SharedComponents.Text
            text={
              "Daiquiri Games - это команда опытных специалистов, которая предлагает своему комьюнити качественный сервис для комфортной и бесконечно захватывающей игры только на наших серверах.\n"
            }
            type={"md"}
            color={white}
          />
          <SharedComponents.VerticalBox height={24} />
          <SharedComponents.Text
            text={"На сервере Daiquiri установлены следующие рейтинги:"}
            type={"md"}
            color={white}
          />
          <SharedComponents.MarkedList
            data={["Дроп - х20", "Опыт - х40", "Серебро - х1", "Квест - x5"]}
          />
        </ResponsiveInner>
      </ResponsiveWrapper>
    </SharedComponents.Screen>
  );
};
