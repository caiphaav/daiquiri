import styled from "styled-components";

import { NAVBAR_DESKTOP_HEIGHT } from "../constants";

interface IMobileWrapper {
  isActive: boolean;
}

export const MobileWrapper = styled.div<IMobileWrapper>(
  ({ theme, isActive }) => `
 
   height: fit-content;
   width: 100%; 
   position: fixed;
   top: ${NAVBAR_DESKTOP_HEIGHT}px; 
   transform: translateY(${isActive ? 0 : "-500px"});
   transition: .3s linear;
   
  ${theme.breakpoints.up(theme.breakpoints.ipadPro)} { 
     display: none;
  }     
`
);
