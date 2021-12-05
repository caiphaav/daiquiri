import styled from "styled-components";

export const Img = styled.img(
  ({ theme }) => `
    width: 100%;
    height: 860px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    opacity: 33%;
   
  ${theme.breakpoints.down(theme.breakpoints.medium)} {
    object-fit: cover;
    object-position: 50% 50%;
    max-width: none;
    position: fixed;
    top: 0px;
    left: 0.09375px;
    width: 100%;
    height: 860px;
    overflow: hidden;
    pointer-events: none;
    margin-top: 79.2437px;
    transform: translate3d(0px, -79.2063px, 0px);
  }   
`
);
