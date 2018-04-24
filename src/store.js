import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import brewsReducer from './reducers/brewsReducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import rootReducer from './reducers/indexReducer';

const store = createStore(
  rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));

export default store;