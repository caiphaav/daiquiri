import styled from "styled-components";

interface IResponsiveImg {
  desktopWidth?: number;
  mobileWidth?: number;
}

export const ResponsiveImg = styled.img<IResponsiveImg>(
  ({ theme, desktopWidth = 100, mobileWidth = 100 }) => `
  
  width: ${desktopWidth}%; 
  
  ${theme.breakpoints.down(theme.breakpoints.ipadPro)} {
     width: ${desktopWidth + 10 > 100 ? 100 : desktopWidth + 10}%; 
  }  
   
  ${theme.breakpoints.down(theme.breakpoints.ipad)} {
     width: ${mobileWidth}%; 
  }    
`
);
