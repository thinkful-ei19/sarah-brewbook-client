import {
  FETCH_BREWS_REQUEST,
  FETCH_BREWS_SUCCESS,
  FETCH_BREWS_ERROR,
  ADD_BREW
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
  } else if (action.type === ADD_BREW) {
    return Object.assign({}, state, {
      brews: [...state.brews, action.brew],
      error: null,
      loading: false
    })
  }
  console.log(action)
  return state
}

export default brewsReducer