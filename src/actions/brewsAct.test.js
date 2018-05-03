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