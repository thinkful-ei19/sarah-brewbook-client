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
    expect(newState).toEqual({ 
      brews: [], 
      loading: true, 
      error: null, 
      editBrew: false });
  });

  it('should handle the fetchBrewsSuccess action', () => {
    const brews = [{name: 'IPA', recipe: 'hops', notes: 'yum'}];

    const state = { 
      brews: [], 
      loading: true, 
      error: null, 
      editBrew: false 
    };
    const newState =  brewsReducer(state, fetchBrewsSuccess(brews));
    expect(newState).toEqual({
      brews, 
      "editBrew": false, 
      "error": null, 
      "loading": false
    });
  });

  it('should handle the fetchBrewsError action', () => {
    const error = 'error loading page'
    const state = { 
      brews: [], 
      loading: true, 
      error: null, 
      editBrew: false 
    };

    const newState =  brewsReducer(state, fetchBrewsError(error));
    expect(newState).toEqual({ 
      brews: [],
      loading: false,
      error,
      editBrew: false 
    });
  });

  it('should handle the addBrew action', () => {
    const brew = {
      name: 'watermelon wheat',
      recipe: 'hops, yeast, grain',
      notes: 'good summer brew'
    };
    const state = { 
      brews: [], 
      loading: true, 
      error: null, 
      editBrew: false 
    };
    const newState =  brewsReducer(state, addBrew(brew));
    expect(newState).toEqual({ 
      brews: [brew],
      loading: false,
      error: null,
      editBrew: false 
    });
  });

  it('should handle the deleteBrewSuccess action', () => {
    const id = 987654321
    const state = { 
      brews: [{
        id: 123456789,
        name: 'watermelon wheat',
        recipe: 'hops, yeast, grain',
        notes: 'good summer brew'
      },
      {
        id: 987654321,
        name: 'IPA',
        recipe: 'hops, yeast, grain',
        notes: 'good summer brew'
      }]
    };
    const newState =  brewsReducer(state, deleteBrewSuccess(id));

    console.log(newState);
    expect(newState).toEqual({
      brews: [ { 
        id: 123456789,
        name: 'watermelon wheat',
        recipe: 'hops, yeast, grain',
        notes: 'good summer brew' } ] 
    });
  });

})