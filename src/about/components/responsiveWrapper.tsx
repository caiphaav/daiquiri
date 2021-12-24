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
