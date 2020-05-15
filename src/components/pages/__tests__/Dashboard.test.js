import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from '../Dashboard';


it('matches the Dashboard snapshot', () => {
  const tree = renderer.create(<Dashboard/>).toJSON();
  expect(tree).toMatchSnapshot();
});
