import React, { useState } from "react";
import styled from "styled-components";

type InputType = "text" | "number";

interface EditableCellProps {
  value: string | number;
  onChange: (newValue: string | number) => void;
}

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  outline: none;
  box-sizing: border-box;
`;

const EditableCell: React.FC<EditableCellProps> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    setInputValue(newValue);
  };

  const handleBlur = () => {
    onChange(inputValue);
  };

  return (
    <StyledInput
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default EditableCell;
