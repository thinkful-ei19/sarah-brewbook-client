import { API_BASE_URL } from '../config';
// import { SubmissionError } from 'redux-form';
import { normalizeResponseErrors } from './utils';

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
});

//success action for fetching one brew by id
export const FETCH_BREW_SUCCESS = 'FETCH_BREWS_SUCCESS'
export const fetchBrewSuccess = (brew) => ({
    type:FETCH_BREW_SUCCESS,
    brew
});

export const TOGGLE_EXPAND_BREW = 'EXPAND_BREW'
export const toggleExpandBrew = (brew) => ({
  type: TOGGLE_EXPAND_BREW,
  brew
})
//need to add fetchbrew by id for toggle brew?


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

  export const createBrew = (name, recipe, notes) => dispatch => {
    
    return (
        fetch(`${API_BASE_URL}/api/brews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                recipe,
                notes
            })
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then((body) => console.log(body))
            
    );
}

export const fetchBrew = brew => dispatch => {
  dispatch(fetchBrewsRequest()); //tells us we've begun loading
  return fetch(`${API_BASE_URL}/api/brews/:id`)
      .then(res => {
          console.log(res);
        if(!res.ok) {
          return Promise.reject('something went wrong');
        }
        return res.json();
      })
      // .then(brews => dispatch(fetchBrewsSuccess(brews)))
      // .then(brews => console.log(brews))
      // .catch(err => dispatch(fetchBrewsError(err)));
  }
