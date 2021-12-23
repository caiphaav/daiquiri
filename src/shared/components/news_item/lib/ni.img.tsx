import styled from "styled-components";

export const Img = styled.img(
  ({ theme }) => `   
    width: 339px;
    height: 225px;
    opacity: 0.5;
    transform: skew(-8deg);
    transition: 0.3s ease-in;
    
    ${theme.breakpoints.down(theme.breakpoints.ipad)} {
        width: 75%;
        margin-bottom: 16px;
    } 
    
    ${theme.breakpoints.down(theme.breakpoints.pixel)} {
        width: 100%;
        margin-bottom: 16px;
    } 
    
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`
);
