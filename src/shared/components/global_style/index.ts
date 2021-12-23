import { createGlobalStyle } from "styled-components";
import { ITheme } from "../../theme";

export const GlobalStyle = createGlobalStyle`

  *{
  //
   font-family: Montserrat;
  //
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  }
  
  html {
    color: #545454;
    font-size: 12px; 
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: #09090b;
  }
  
  p {
    margin: 0;
    padding: 0;
  }
  
  a {
    color: ${({ theme }: { theme: ITheme }) => theme.palette.pink};
    font-size: 1.25rem;
    text-decoration: none;
  }

  body {
    background: ${({ theme }: { theme: ITheme }) => theme.palette.white};
  }
`;
