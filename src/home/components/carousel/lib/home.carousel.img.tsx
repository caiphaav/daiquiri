import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 256px;
  opacity: 0.5;
  object-fit: cover;
  transition: 0.3s ease-in;

  transform: skew(-8deg);

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;
