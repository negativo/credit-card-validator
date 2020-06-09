import React from 'react';
import { Button } from './';
import renderer from 'react-test-renderer';

it('renders correctly without props', () => {
  const tree = renderer.create(<Button>Test Button</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with props', () => {
  const tree = renderer
    .create(<Button disabled={true}>Test Button</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
