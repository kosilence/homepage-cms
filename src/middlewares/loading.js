/**
 * Loading component display or not by action type.
 */

import { actions } from "../actions";

const loading = store => next => action => {
  if(action.loading) {
    store.dispatch(actions.showLoading());
  }

  let typeSuffix = action.type.split('_').pop();
  if(typeSuffix === 'SUCCESS' || typeSuffix === 'FAIL') {
    store.dispatch(actions.hideLoading());
  }

  return next(action);
};

export default loading;
