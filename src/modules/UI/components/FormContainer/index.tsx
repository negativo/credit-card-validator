import React from 'react';
import styled from 'styled-components';
const Form = styled.div`
  margin: auto;
  width: 100%;
  max-width: 570px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
  border-radius: 10px;
  padding: 35px;

  @media screen and (max-width: 576px) {
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const FormContainer: React.StatelessComponent = ({ children }) => (
  <Form>{children}</Form>
);
