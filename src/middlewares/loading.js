/**
 * Loading component display or not by action type.
 */

import { actions } from "../actions";

const loading = store => next => action => {
  if(action.loading) {
    store.dispatch(actions.showLoading());
  }

  if(action.type.match(/_(SUCCESS|FAIL)$/)) {
    store.dispatch(actions.hideLoading());
  }

  return next(action);
};

export default loading;
