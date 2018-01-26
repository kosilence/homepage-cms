import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from 'react-router-redux';
import axiosMiddleware from 'redux-axios-middleware';
import createHistory from 'history/createBrowserHistory';
import reducer from "../reducers";
import { http } from "../helpers/api";
import loading from "../middlewares/loading";
import alert from "../middlewares/alert";

const history = createHistory();
const RouterHistory = routerMiddleware(history);
let store = createStore(
  reducer,
  applyMiddleware(
    RouterHistory,
    axiosMiddleware(http),
    loading,
    alert
  )
);

export { history, store };