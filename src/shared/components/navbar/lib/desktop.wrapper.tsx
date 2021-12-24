import styled from "styled-components";

export const DesktopWrapper = styled.div(
  ({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: flex-start;  
   
  ${theme.breakpoints.down(theme.breakpoints.ipadPro)} {
    display: none;
  }     
`
);
