import React from 'react';
import LandingPage from './landing-page';
import { shallow } from 'enzyme';

//need props and mount: Invariant Violation: Could not find "store" in either the context or props of "Connect(LandingPage)". Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to
// "Connect(LandingPage)".

describe ('<LandingPage />', () => {
  it('Should render without crashing', () => {
    shallow(<LandingPage />);
  })
})