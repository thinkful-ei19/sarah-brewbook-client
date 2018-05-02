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


export const fetchBrews = brews => (dispatch, getState) => {
  dispatch(fetchBrewsRequest()); //tells us we've begun loading
  const authToken = getState().auth.authToken;
  console.log(authToken);
  return fetch(`${API_BASE_URL}/api/brews`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
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

  export const createBrew = (name, recipe, notes, userId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log(authToken);
    
    return (
        fetch(`${API_BASE_URL}/api/brews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
                name,
                recipe,
                notes,
                userId
            })
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(res => dispatch(addBrew(res)))
            .then((body) => console.log(body))
            // .catch(err => {})
            
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

  //UPDATE existing brew

  export const updateBrew = (id, name, recipe, notes) => (dispatch, getState)=> {
    const brew={
        _id: id,
        name,
        recipe,
        notes
    }
    const authToken = getState().auth.authToken;
    console.log(authToken);
    
    return fetch(`${API_BASE_URL}/api/brews/${id}`, {
        method: 'PUT',
        body: JSON.stringify(brew),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
            
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(brews=> dispatch(fetchBrews()))
        // .then((body) => console.log(body))
        .catch(err => console.error(err));
}

//DELETE brew

export const DELETE_BREW_SUCCESS = 'DELETE_BREW_SUCCESS'
export const deleteBrewSuccess = (id) => {
    return {
        type: DELETE_BREW_SUCCESS,
        id
    }
}

export const deleteBrewFetch = id => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/api/brews/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(id => dispatch(deleteBrewSuccess(id)))
        .then(res => res.json())
        .then(res => console.log(res.body))
        // .then(res => dispatch(deleteBrewSuccess(res)))
        .catch(err=> {
            console.log(err);
        })
    
}
