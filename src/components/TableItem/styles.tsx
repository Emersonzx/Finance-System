import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`width:10%;
  padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};
`;
export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;
export const RemoveButton = styled.button`
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  background-color: #085772;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #09093d, #193283);
    color: white;
  }
`;
