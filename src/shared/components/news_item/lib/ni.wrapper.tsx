import styled from "styled-components";

export const Wrapper = styled.div(
  ({ theme }) => `   
   display: flex;
   margin-bottom: 64px;
   
  ${theme.breakpoints.down(theme.breakpoints.ipad)} {
    flex-direction: column;
  } 
`
);
