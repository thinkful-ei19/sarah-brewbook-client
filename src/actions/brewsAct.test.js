import { FETCH_BREWS_REQUEST, fetchBrewsRequest, FETCH_BREWS_SUCCESS, fetchBrewsSuccess, FETCH_BREWS_ERROR, fetchBrewsError, ADD_BREW, addBrew, DELETE_BREW_SUCCESS, deleteBrewSuccess} from './brewsAct';

//only imported sync actions for now

describe('fetchBrewsRequest', () => {
  it('Should return the action', () => {
    const action = fetchBrewsRequest();
    expect(action).toEqual({
      type: FETCH_BREWS_REQUEST
    });
  });
});

describe('fetchBrewsSuccess', () => {
  it('Should return the action', () => {
    const brews = [{'name': 'IPA'}];
    const action = fetchBrewsSuccess(brews);
    expect(action).toEqual({
      type: FETCH_BREWS_SUCCESS,
      brews
    });
  });
});

describe('fetchBrewsError', () => {
  it('Should return the action', () => {
    const error = 's@r@h';
    const action = fetchBrewsError(error);
    expect(action).toEqual({
      type: FETCH_BREWS_ERROR,
      error
    });
  });
});

describe('addBrew', () => {
  it('Should return the action', () => {
    const brew = {
      'name': 'watermelon wheat',
      'recipe': 'hops, yeast, grain',
      'notes': 'good summer brew'
    };
    const action = addBrew(brew);
    expect(action).toEqual({
      type: ADD_BREW,
      brew
    });
  });
});

describe('deleteBrewSuccess', () => {
  it('Should return the action', () => {
    const id = 123456789123456789;
    const action = deleteBrewSuccess(id);
    expect(action).toEqual({
      type: DELETE_BREW_SUCCESS,
      id
    });
  });
});
