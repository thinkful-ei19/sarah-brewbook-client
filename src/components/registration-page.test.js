import React from 'react';
import RegistrationPage from './registration-page';
import { shallow } from 'enzyme';

//need props and mount: Invariant Violation: Could not find "store" in either the context or props of "Connect(HeaderBar)". Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to "Connect(RegistrationPage)".

describe ('<RegistrationPage />', () => {
  it('Should render without crashing', () => {
    
    shallow(<RegistrationPage />);
  })
})