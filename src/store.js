import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import brewsReducer from './reducers/brewsReducer';
// import rootReducer from './reducers/indexReducer';

const store = createStore( brewsReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));

export default store;