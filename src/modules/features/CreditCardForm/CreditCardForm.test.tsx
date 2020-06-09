import React from 'react';
import { CreditCardForm } from './CreditCardForm';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<CreditCardForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
