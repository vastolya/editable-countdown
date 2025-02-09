import React, { useState, useRef } from "react";
import styled from "styled-components";

interface TextareaProps {
  value: string;
  onChange: (newValue: string) => void;
}

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 3rem;
  border: none;
  background: none;
  outline: none;
  box-sizing: border-box;
  resize: none;
  overflow: hidden;
  line-height: 1.5;
  font-size: 1.25rem;
  font-family: Montserrat, sans-serif;
  resize: none; /* Отключаем изменение размера вручную */
  overflow: auto; /* Добавляем прокрутку, если текст не помещается */
`;

const Textarea: React.FC<TextareaProps> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <StyledTextarea
      ref={textareaRef}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default Textarea;
