import React from 'react';
import SingleBrew from './brew-card';
import { shallow } from 'enzyme';

describe ('<SingleBrew />', () => {
  it('Should render without creashing', () => {
    shallow(<SingleBrew />);
  })
})