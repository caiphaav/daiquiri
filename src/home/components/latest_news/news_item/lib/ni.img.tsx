import styled from "styled-components";

export const Img = styled.img(
  ({ theme }) => `   
    width: 339px;
    height: 225px;
    transform: skew(-8deg);
    
    ${theme.breakpoints.down(theme.breakpoints.ipad)} {
        width: 100%;
    } 
`
);
