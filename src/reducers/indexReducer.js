import { combineReducers } from 'redux';
import brewsReducer from './brewsReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  brews: brewsReducer,
  form: formReducer 
})

export default rootReducer
