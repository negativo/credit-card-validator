import React from 'react';
import { FormContainer } from './';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<FormContainer>FormContainer Test</FormContainer>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
