import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 100px;
  height: 100px;
  background: #747377;
  transform: skew(-8deg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
