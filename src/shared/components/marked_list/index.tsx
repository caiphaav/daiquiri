import styled from "styled-components";

const MarkedListWrapper = styled.div`
  ul {
    margin: 24px;
  }

  li {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
`;

interface IMarkedList {
  data: Array<string>;
}

const renderItem = (news: string, index: number) => <li key={index}>{news}</li>;

export const MarkedList = ({ data }: IMarkedList) => {
  return (
    <MarkedListWrapper>
      <ul>{data.map(renderItem)}</ul>
    </MarkedListWrapper>
  );
};
