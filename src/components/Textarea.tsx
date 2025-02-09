import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { updateCellValue } from "../store/tableSlice";
import styled from "styled-components";

interface TextareaProps {
  id: string;
}

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 3rem;
  border: none;
  background: none;
  outline: none;
  box-sizing: border-box;
  resize: none;
  overflow: auto;
  line-height: 1.5;
  font-size: 1.25rem;
  font-family: Montserrat, sans-serif;
`;

const Textarea: React.FC<TextareaProps> = ({ id }) => {
  const dispatch = useDispatch();
  const value = useSelector(
    (state: RootState) =>
      state.table.cells.find((cell: TextareaProps) => cell.id === id)?.value
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateCellValue({ id, value: e.target.value }));
  };

  return <StyledTextarea value={value || ""} onChange={handleChange} />;
};

export default Textarea;
