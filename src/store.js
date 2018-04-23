import { createStore, applyMiddleware } from 'redux';
import brewsReducer from './reducers/brewsReducer'
import thunk from 'redux-thunk';

const store = createStore(brewsReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));

export default store;