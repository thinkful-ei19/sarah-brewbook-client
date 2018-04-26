import {loadAuthToken, clearAuthToken} from '../local-storage';
import jwtDecode from 'jwt-decode';

import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_WARNING
} from '../actions/auth';

let authToken = loadAuthToken();
let currentUser;
if(authToken) {
    const decodeToken = jwtDecode(authToken);
    currentUser = decodeToken.user.username;
}

const initialState = {
  authToken: null, // authToken !== null does not mean it has been validated
  currentUser: null,
  loading: false,
  error: null,
  warning: false,
  userId: null
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_AUTH_TOKEN) {
      return Object.assign({}, state, {
          authToken: action.authToken
      });
  } else if (action.type === CLEAR_AUTH) {
      return Object.assign({}, state, {
          authToken: null,
          currentUser: null
      });
  } else if (action.type === AUTH_REQUEST) {
      return Object.assign({}, state, {
          loading: true,
          error: null
      });
  } else if (action.type === AUTH_SUCCESS) {
      return Object.assign({}, state, {
          loading: false,
          currentUser: action.currentUser,
          userId: action.userId
      });
  } else if (action.type === AUTH_ERROR) {
      return Object.assign({}, state, {
          loading: false,
          error: action.error
      });
  } else if (action.type === AUTH_WARNING) {
      return Object.assign({}, state, {
          warning: true
      })
  }
  return state;
}
