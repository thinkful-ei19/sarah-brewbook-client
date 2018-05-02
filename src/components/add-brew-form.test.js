import React from 'react';
import AddBrewForm from './add-brew-form';
import { shallow } from 'enzyme';

describe ('<AddBrewForm />', () => {
  it('Should render without crashing', () => {
    shallow(<AddBrewForm />);
  })
})
 