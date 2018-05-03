import React from 'react';
import RequiresLogin from './requires-login';
import { shallow } from 'enzyme';

//test passes

describe ('<RequiresLogin />', () => {
  it('Should render without crashing', () => {
    
    shallow(<RequiresLogin />);
  })
})