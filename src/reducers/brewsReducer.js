import {
  FETCH_BREWS_REQUEST,
  FETCH_BREWS_SUCCESS,
  FETCH_BREWS_ERROR
} from '../actions/brewsAct';

const initialState = {
    brews: [],
    loading: false,
    error: null
}

const brewsReducer = (state =  initialState, action) => {

  if (action.type === FETCH_BREWS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null 
    });
  }
  if (action.type === FETCH_BREWS_SUCCESS) {
    return Object.assign({}, state, {
      brews: action.brews,
      loading: false,
      error:null
    });
  }
  if (action.type === FETCH_BREWS_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state
}

export default brewsReducer