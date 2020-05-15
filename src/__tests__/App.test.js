import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';


it('matches the main App snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
