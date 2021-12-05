import styled from "styled-components";

export const Inner = styled.div(
  ({ theme }) => `
  
  display: flex;
  height: 790px;
  flex-direction: column;
  justify-content: center; 
  width: fit-content;
  margin-left: 192px;
   
  ${theme.breakpoints.down(theme.breakpoints.medium)} {
    margin-left: 96px;
  } 
  
  ${theme.breakpoints.down(theme.breakpoints.ipad)} {
    margin-left: 48px;
  }   
  
  ${theme.breakpoints.down(theme.breakpoints.pixel)} {
    margin-left: 16px;
  }  
  ${theme.breakpoints.down(theme.breakpoints.iphoneX)} {
    margin-left: 8px;
  }  
`
);
