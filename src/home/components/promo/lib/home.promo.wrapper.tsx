import styled from "styled-components";

export const Wrapper = styled.div(
  ({ theme }) => ` 
    width: 100%; 
    height: 800px;    
    position: absolute;
    display: flex;
    flex-direction: column;    
   
  ${theme.breakpoints.down(theme.breakpoints.medium)} {
    height: 800px;
  }   
  ${theme.breakpoints.down(theme.breakpoints.pixel)} {
    padding:24px
  }   
`
);
