import brewsReducer from './brewsReducer';
import { fetchBrewsRequest, fetchBrewsSuccess, fetchBrewsError, addBrew,deleteBrewSuccess} from '../actions/brewsAct';

describe('brewsReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const newState = brewsReducer(undefined, {
      type: '@@unknown'
    });

    expect(newState).toEqual({
      brews: [],
      loading: false,
      error: null,
      editBrew: false
    })
  });

  it('should return the current state on an unknown action', () => {
    const state = {
      brews: [{name: 'IPA'}],
      loading: true,
      error: true,
      editBrew: true
    };

    const newState = brewsReducer(state, {
      type: '@@unknownaction'
    });
    console.log(state);
    expect(newState).toEqual(state);
  });

  it('should handle the fetchBrewsRequest action', () => {
    const state = {
      brews: [],
    loading: false,
    error: null,
    editBrew: false
    };

    const newState =  brewsReducer(state, fetchBrewsRequest());

    console.log(newState);
    expect(newState).toEqual({ 
      brews: [], 
      loading: true, 
      error: null, 
      editBrew: false })
  });

  it('should handle the fetchBrewsSuccess action', () => {

  });

  it('should handle the fetchBrewsError action', () => {

  });

  it('should handle the addBrew action', () => {

  });

  it('should handle the deleteBrewSuccess action', () => {

  });

})