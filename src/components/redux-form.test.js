import LoginForm from './login-form';
import AddBrewForm from './add-brew-form'; 
import RegistrationForm from './registration-form';
import React from 'react';

import { expect } from 'chai'
import { mount } from 'enzyme'
import sinon from 'sinon'

import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
