import React from 'react';
import styled from 'styled-components';

interface ButtonContainerProps {
  disabled?: boolean;
}
const ButtonContainer = styled.div<ButtonContainerProps>`
  width: 100%;
  height: 55px;
  line-height: 55px;
  background: ${props => (props.disabled ? '#aaa' : '#2364d2')};
  border: none;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 500;
  box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  @media screen and (max-width: 480px) {
    margin-top: 10px;
  }
`;
interface ButtonProps {
  disabled?: boolean;
}
export const Button: React.StatelessComponent<ButtonProps> = ({
  disabled,
  children,
}) => <ButtonContainer disabled={disabled}>{children}</ButtonContainer>;
