import React from 'react';
import BrewList from './brewList';
import { shallow } from 'enzyme';
//need props and mount: Invariant Violation: Could not find "store" in either the context or props of "Connect(HeaderBar)". Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to "Connect(BrewList)".

describe ('<BrewList />', () => {
  it('Should render without crashing', () => {
    shallow(<BrewList />);
  })
})