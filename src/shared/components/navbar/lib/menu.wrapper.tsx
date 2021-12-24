import styled from "styled-components";

import { NAVBAR_DESKTOP_HEIGHT } from "../constants";

export const MenuWrapper = styled.div(
  ({ theme }) => `

  
  display: none;
  
   
  ${theme.breakpoints.down(theme.breakpoints.ipadPro)} { 
    position: absolute;
    right: ${NAVBAR_DESKTOP_HEIGHT / 4}px;
    display: flex; 
    align-items: center; 
    justify-content: center;
    width: ${NAVBAR_DESKTOP_HEIGHT}px;
    height: ${NAVBAR_DESKTOP_HEIGHT}px; 
    border-radius: 8px;
    transition: .2s linear;
    z-index: 1000;
    
  }  
  
  ${theme.breakpoints.up(theme.breakpoints.ipadPro)} { 
    &:hover {
      cursor: pointer; 
      border: 1px solid white;
    }   
  }     
`
);
