import React from 'react';
import renderer from 'react-test-renderer';

import SignUp from '../SignUp';


it('matches the Sign Up snapshot', () => {
  const tree = renderer.create(<SignUp/>).toJSON();
  expect(tree).toMatchSnapshot();
});
