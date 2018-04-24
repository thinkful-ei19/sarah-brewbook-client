import { API_BASE_URL } from '../config';

export const FETCH_BREWS_REQUEST = 'FETCH_BREWS_REQUEST'
export const fetchBrewsRequest = () => ({
    type:FETCH_BREWS_REQUEST
});

export const FETCH_BREWS_SUCCESS = 'FETCH_BREWS_SUCCESS'
export const fetchBrewsSuccess = (brews) => ({
    type:FETCH_BREWS_SUCCESS,
    brews
});

export const FETCH_BREWS_ERROR = 'FETCH_BREWS_ERROR'
export const fetchBrewsError = (error) => ({
    type:FETCH_BREWS_ERROR,
    error
});

export const ADD_BREW='ADD_BREW'
export const addBrew = (brew) => ({
  type: ADD_BREW,
  brew
})


export const fetchBrews = brews => dispatch => {
  dispatch(fetchBrewsRequest()); //tells us we've begun loading
  return fetch(`${API_BASE_URL}/api/brews`)
      .then(res => {
          console.log(res);
        if(!res.ok) {
          return Promise.reject('something went wrong');
        }
        return res.json();
      })
      .then(brews => dispatch(fetchBrewsSuccess(brews)))
      .then(brews => console.log(brews))
      .catch(err => dispatch(fetchBrewsError(err)));
  }