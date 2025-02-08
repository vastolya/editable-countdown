import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import EditableCell from "./components/EditableCell";

type InputType = "text" | "number" | "percent" | "fio" | "mixed";

interface EditableCellProps {
  type: InputType;
  value: string;
  onChange: (newValue: string) => void;
}

const GlobalStyle = createGlobalStyle`
span, input {
  font-family: Montserrat;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
  letter-spacing: 0%;
}`;

const Table = styled.div`
  display: flex;
  background: pink;
  width: 100rem;
  height: 25rem;
  margin: 8.5rem auto;
`;

const TableRow = styled.div`
  display: flex;
  background: #e3e3e3;
  width: 100%;
  height: fit-content;
`;

const TableDiv = styled.div<{ minWidth?: string; borderWidth?: string }>`
  display: flex;
  padding: 1.875rem 2.5rem;
  box-sizing: border-box;
  height: fit-content;
  min-width: ${(props) => props.minWidth || "100%"};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-width: ${(props) => props.borderWidth || "0 0 0 0"};
`;

const Label = styled.span`
  opacity: 60%;
  margin-right: 1.25rem;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Table>
        <TableRow>
          <TableDiv minWidth="18.75rem">
            <EditableCell value={"30 января 2024"} onChange={() => {}} />
          </TableDiv>
          <TableDiv minWidth="12.5rem" borderWidth="0 1px 0 1px">
            <EditableCell value={"Смена 2"} onChange={() => {}} />
          </TableDiv>
          <TableDiv minWidth="50rem" borderWidth="0 1px 0 0">
            <Label>Мастер:</Label>
            <EditableCell value={"Иванов Иван"} onChange={() => {}} />
          </TableDiv>
          <TableDiv minWidth="18.125rem">
            <EditableCell value={"РПТКМ-120"} onChange={() => {}} />
          </TableDiv>
        </TableRow>
      </Table>
    </>
  );
};

export default App;
