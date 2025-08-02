import styled from "styled-components";

export const ItemContainer = styled.li`
  width: 299px;
  height: fit-content;
  padding: 12px 10px;
  border: 1px solid #d1aa8e;
  background-color: #f9e6d8;
  list-style: none;
  border-radius: 5px;
  div{
    display: flex;
    flex-direction: column;
    row-gap: 2px;
  }
  h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {

  &:first-child svg{
    fill:#e67f69;
    }
  &:nth-child(2) svg{
    fill:#5a717f;
    }

    margin: 5px 0;
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
`;
