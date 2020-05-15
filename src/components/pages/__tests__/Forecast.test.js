import React from 'react';
import renderer from 'react-test-renderer';

import Forecast from '../Forecast';


it('matches the Forecast snapshot', () => {
  const tree = renderer.create(<Forecast />).toJSON();
  expect(tree).toMatchSnapshot();
});
