import { combineReducers } from 'redux';
import brewsReducer from './brewsReducer';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: authReducer,
  brews: brewsReducer,
  form: formReducer 
})

export default rootReducer
