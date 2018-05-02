import React from 'react';
import Calculator from './calculators';
import { shallow } from 'enzyme';

describe ('<Calculator />', () => {
  it('Should render without crashing', () => {
    shallow(<Calculator />);
  })
})