import history from '../history';
import {
  FETCH_BREWS_REQUEST,
  FETCH_BREWS_SUCCESS,
  FETCH_BREWS_ERROR,
  ADD_BREW,
  TOGGLE_EXPAND_BREW,
  DELETE_BREW_SUCCESS
} from '../actions/brewsAct';

const initialState = {
    brews: [],
    loading: false,
    error: null,
    editBrew: false
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
  } else if (action.type === TOGGLE_EXPAND_BREW) {
    return Object.assign({}, state, {
      expandBrew: !state.expandBrew
    })
  } else if (action.type === DELETE_BREW_SUCCESS) {
    const newState = Object.assign([], state);
    let deleteIndex = state.brews.map(function(brew){
      return brew.id;
    }).indexOf(action.id);
    console.log(deleteIndex)
    console.log(newState)
    const newArray = newState.brews.splice(deleteIndex, 1)
    console.log(newArray)
    console.log(newState)
    // history.push('/brews')
    return newState

    // let brewArray = [...state.brews]
    // let deleteIndex = brewArray.map(function(brew){
    //   return brew.id;
    // }).indexOf(action.id)
    // // let deleteIndex = brewArray.find(brew => {
    // //   brew[brews.id] === action.id;
    //   // console.log(brew.id);
    //   // })
    // console.log(deleteIndex)
    // console.log(brewArray)
    // const newArray = brewArray.splice(deleteIndex, 1)
    // console.log(newArray)
    // console.log(brewArray)
    // history.push('/brews')
    // return Object.assign({}, state, {
    //   brews: brewArray
    // })
  }
  // else if (action.type === FETCH_BREW_SUCCESS) {
  //   return Object.assign({}, state, {
  //     brews: brews.action
  //   })
  // }
  console.log(action)
  return state
}

export default brewsReducer