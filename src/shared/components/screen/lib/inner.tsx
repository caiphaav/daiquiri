import styled from "styled-components";

export const Inner = styled.div(
  ({ theme }) => `
  
  width: 1400px; 
  min-height: 100vh;
  background: ${theme.palette.primary};
   
  ${theme.breakpoints.down(theme.breakpoints.medium)} {
    width: 100%; 
  }   
`
);
