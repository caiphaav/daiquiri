import styled from "styled-components";

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
