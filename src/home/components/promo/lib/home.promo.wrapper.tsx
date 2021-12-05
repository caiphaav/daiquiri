import styled from "styled-components";

export const Wrapper = styled.div(
  ({ theme }) => ` 
    width: 100%; 
    height: 860px;    
    position: absolute;
    display: flex;
    flex-direction: column;   
    
   
  ${theme.breakpoints.down(theme.breakpoints.medium)} {
    height: 860px;
  }   
`
);
