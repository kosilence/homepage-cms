/**
 * Alert component show message when get response from server.
 *
 *
 */

import { actions } from "../actions";

const alert = store => next => action => {
  let typeSuffix = action.type.split('_').pop();
  let preActionAlert = {};
  if(action.meta && action.meta.previousAction && action.meta.previousAction.alert) {
    preActionAlert = action.meta.previousAction.alert;
  }
  if(typeSuffix === 'SUCCESS' && preActionAlert.success && preActionAlert.success.display) {
    let newAlert = {
      msg: preActionAlert.success.msg || action.payload.data.data.msg || action.type,
    }
    store.dispatch(actions.showAlert(newAlert));
  }else if(typeSuffix === 'FAIL' && preActionAlert.fail && preActionAlert.fail.display) {
    let newAlert = {
      msg: preActionAlert.fail.msg || action.payload.data.data.msg || action.type,
    }
    store.dispatch(actions.showAlert(newAlert));
  }

  return next(action);
};

export default alert;
