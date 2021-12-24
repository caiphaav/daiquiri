import styled from "styled-components";

export const Inner = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  padding: 0 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    transition: 0.15s ease-in;
    font-size: 1.25rem;
    color: white;
    margin-right: 48px;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.palette.pink};
    }
  }
`;
