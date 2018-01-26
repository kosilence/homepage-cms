import { types } from "../actions";

const initialState = {
  loading: false,
  alert: {
    display: false,
    msg: ''
  }
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case types.LOADING_SHOW:
      return { ...state, loading: true };
    case types.LOADING_HIDE:
      return { ...state, loading: false };
    case types.ALERT_SHOW:
      return { ...state, alert: {
        display: true,
        type: action.alert.type || 'success',
        msg: action.alert.msg || '',
      }};
    case types.ALERT_HIDE:
      return { ...state, alert: {
        display: false,
        type: '',
        msg: ''
      }};
    default:
      return state;
  }
};