import React from 'react';
import SingleBrew from './brew-card';
import { shallow } from 'enzyme';
import store from '../store';


describe('<SingleBrew />', () => {
  it('Should render without crashing', () => {
    shallow(<SingleBrew store={store} />);
  })
})