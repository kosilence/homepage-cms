import { combineReducers } from 'redux';
import auth from './auth.reducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  auth,
  router: routerReducer
});