import React from 'react';
import styled from 'styled-components';

export enum LabelType {
  Error = 'error',
  Primary = 'primary',
}

interface LabelProps {
  type?: LabelType;
}

const colors = {
  primary: '#1a3b5d',
  error: '#EB5F46',
};
const LabelContainer = styled.div<LabelProps>`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 500;
  color: ${({ type = LabelType.Primary }) => colors[type]};
  width: 100%;
  display: block;
  user-select: none;
`;

export const Label: React.StatelessComponent<LabelProps> = ({
  type = LabelType.Primary,
  children,
}) => <LabelContainer type={type}>{children}</LabelContainer>;
