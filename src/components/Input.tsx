import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { updateCellValue } from "../store/tableSlice";
import styled from "styled-components";

interface InputProps {
  id: string;
  textColor?: string;
  textAlign?: string;
}

const StyledInput = styled.input<{ $textAlign?: string; $textColor?: string }>`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  outline: none;
  text-align: ${(props) => props.$textAlign || "left"};
  padding: 0;
  color: ${(props) => props.$textColor || "inherit"};
`;

const Input: React.FC<InputProps> = ({ id, textColor, textAlign }) => {
  const dispatch = useDispatch();
  const value = useSelector(
    (state: RootState) =>
      state.table.cells.find((cell: InputProps) => cell.id === id)?.value
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateCellValue({ id, value: e.target.value }));
  };

  return (
    <StyledInput
      value={value || ""}
      $textColor={textColor}
      $textAlign={textAlign}
      onChange={handleChange}
    />
  );
};

export default Input;
