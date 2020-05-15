import React from 'react';
import renderer from 'react-test-renderer';

import LandingPage from '../LandingPage';


it('matches the Landing Page snapshot', () => {
  const tree = renderer.create(<LandingPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
