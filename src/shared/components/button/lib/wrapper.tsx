import styled from "styled-components";

import { IButtonWrapper } from "../types";

export const Wrapper = styled.div<IButtonWrapper>`
  width: fit-content;
  padding: ${({ paddingHorizontal = 48, paddingVertical = 16 }) =>
    `${paddingVertical}px ${paddingHorizontal}px`};

  transform: skew(-8deg);
  transition: 0.2s linear;
  color: white;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.palette.pink};
  p {
    font-family: Lato, sans-serif;
    font-size: ${({ fontSize = "1rem" }) => fontSize};
  }

  &:hover {
    cursor: pointer;
    border: 1px solid white;
    background: ${({ theme }) => theme.palette.pink};
  }
`;
