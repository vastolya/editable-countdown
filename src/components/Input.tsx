import React, { useState } from "react";
import styled from "styled-components";

type InputType = "text" | "number";

interface InputProps {
  value: string | number;
  onChange: (newValue: string | number) => void;
  textColor?: string;
  textAlign?: string;
}

const StyledInput = styled.input<{ textAlign?: string; textColor?: string }>`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  outline: none;
  text-align: ${(props) => props.textAlign || "left"};
  padding: 0;
  color: ${({ textColor }) => textColor || "inherit"};
`;

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  textColor,
  textAlign,
}) => {
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
      textColor={textColor}
      textAlign={textAlign}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default Input;
