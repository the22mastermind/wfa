import React from 'react';
import renderer from 'react-test-renderer';

import SignIn from '../SignIn';


it('matches the Sign In snapshot', () => {
  const tree = renderer.create(<SignIn/>).toJSON();
  expect(tree).toMatchSnapshot();
});
