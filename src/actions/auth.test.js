// import jwtDecode from 'jwt-decode';

// import {API_BASE_URL} from '../config';
// import {normalizeResponseErrors} from './utils';
// import { clearAuthToken, saveAuthToken } from '../local-storage';


import { SET_AUTH_TOKEN, setAuthToken, CLEAR_AUTH, clearAuth, AUTH_REQUEST, authRequest, AUTH_SUCCESS, authSuccess, AUTH_ERROR, authError, AUTH_WARNING, warningAuth} from './auth';

//only imported sync actions for now

describe('setAuthToken', () => {
  it('Should return the action', () => {
    const authToken = 'abc123'
    const action = setAuthToken(authToken);
    expect(action).toEqual({
      type: SET_AUTH_TOKEN,
      authToken
    });
  });
});

describe('clearAuth', () => {
  it('Should return the action', () => {
    const action = clearAuth();
    expect(action).toEqual({
      type: CLEAR_AUTH
    });
  });
});

describe('authRequest', () => {
  it('Should return the action', () => {
    const action = authRequest();
    expect(action).toEqual({
      type: AUTH_REQUEST
    });
  });
});

describe('authSuccess', () => {
  it('Should return the action', () => {
    const currentUser = 'username';
    const userId = 123456789;
    const action = authSuccess(currentUser, userId);
    expect(action).toEqual({
      type: AUTH_SUCCESS,
      currentUser,
      userId
    });
  });
});

describe('authError', () => {
  it('Should return the action', () => {
    const error = 's@r@h';
    const action = authError(error);
    expect(action).toEqual({
      type: AUTH_ERROR,
      error
    });
  });
});

describe('warningAuth', () => {
  it('Should return the action', () => {
    const action = warningAuth();
    expect(action).toEqual({
      type: AUTH_WARNING
    });
  });
});