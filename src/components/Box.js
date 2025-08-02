import styled from "styled-components";

export const Box = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  & h1 {
    height: 70px;
    display: flex;
    width: 100%;
    background-color: #d6e5f6;
    border: 3px solid #83a4c8;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const List = styled.ul`
  width: fit-content;
  flex-wrap: wrap;
  padding: 26px 6px;
  border: 3px solid #a1a7ad;
  background-color: #e2e6ea;
  display: flex;
  column-gap: 2.8125em;
  row-gap: 1.875em;
  justify-content: center;
  align-items: center;
`;
