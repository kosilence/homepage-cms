import { combineReducers } from 'redux';
import global from './global.reducer';
import blog from './blog.reducer';
import album from './album.reducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  global,
  blog,
  album,
  router: routerReducer
});