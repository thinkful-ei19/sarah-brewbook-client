import React from 'react';
import RegistrationForm from './registration-form';
import { shallow } from 'enzyme';

//passes test

describe ('<RegistrationForm />', () => {
  it('Should render without crashing', () => {
    
    shallow(<RegistrationForm />);
  })
})