import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import reducer from "../reducers";
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const RouterHistory = routerMiddleware(history);
let store = createStore(reducer, applyMiddleware(ReduxThunk, RouterHistory));

export { history, store };