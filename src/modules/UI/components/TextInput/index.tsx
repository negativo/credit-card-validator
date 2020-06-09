import React from 'react';
import styled from 'styled-components';
import { Label } from './Label';

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

interface InputProps {
  isValid?: boolean;
  value?: string;
}

const Input = styled.input<InputProps>`
  font-size: 18px;
  border: 2px solid;

  height: 40px;
  border-color: ${props => (props.isValid ? 'green' : 'tomato')};
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
  :focus {
    outline: none;
  }
`;

interface TextInputProps {
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  isValid?: boolean;
  label?: string;
  value?: string;
}

export const TextInput: React.StatelessComponent<TextInputProps> = ({
  onChange,
  isValid,
  label,
  value,
}) => (
  <InputContainer>
    <Label>{label}</Label>
    <Input value={value} type="text" onChange={onChange} isValid={isValid} />
  </InputContainer>
);
