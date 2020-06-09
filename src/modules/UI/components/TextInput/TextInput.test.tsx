import React from 'react';
import { TextInput } from './';
import renderer from 'react-test-renderer';

it('renders correctly with props', () => {
  const tree = renderer.create(<TextInput>TextInput Test</TextInput>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with Label', () => {
  const tree = renderer
    .create(<TextInput label="test label">TextInput Test</TextInput>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with props', () => {
  const tree = renderer
    .create(
      <TextInput
        isValid={true}
        label="test props"
        onChange={() => null}
        value="test value"
      >
        TextInput Test
      </TextInput>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
