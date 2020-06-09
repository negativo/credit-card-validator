import React from 'react';
import styled from 'styled-components';
const LabelContainer = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #1a3b5d;
  width: 100%;
  display: block;
  user-select: none;
`;

export const Label: React.StatelessComponent = ({ children }) => (
  <LabelContainer>{children}</LabelContainer>
);
