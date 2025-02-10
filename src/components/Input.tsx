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
    let newValue = e.target.value;

    if (["hours", "efficiency"].includes(id)) {
      newValue = newValue.replace(/[^0-9.,]/g, "");
    }

    if (id === "master" || id === "status" || id === "personnel_header") {
      newValue = newValue.replace(/[^А-Яа-я. ]/g, "");
    }

    if (id === "personnel_id" || id === "equipment" || id === "spi") {
    } else if (id === "personnel") {
      newValue = newValue.replace(/[^0-9А-Яа-я ]/g, "");
    }

    dispatch(updateCellValue({ id, value: newValue }));
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
