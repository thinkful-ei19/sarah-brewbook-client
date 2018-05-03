import React from 'react';
import Input from './input';
import { mount } from 'enzyme';

describe ('<Input />', () => {
  it('Should render without crashing', () => {
    const name ='name';
    const meta={'touched':true, 'warning': null, 'error':null}
    shallow(<Input meta={meta} htmlFor={name}/>);
  })
})