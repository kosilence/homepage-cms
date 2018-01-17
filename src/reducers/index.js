import { combineReducers } from 'redux';
import auth from './auth.reducer';
import global from './global.reducer';
import blog from './blog.reducer';
import album from './album.reducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  auth,
  global,
  blog,
  album,
  router: routerReducer
});