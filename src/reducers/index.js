import { combineReducers } from 'redux';
import auth from './auth.reducer';
import global from './global.reducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  auth,
  global,
  router: routerReducer
});