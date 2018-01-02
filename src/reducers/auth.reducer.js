import { types } from "../actions";
import Auth from '../helpers/auth';

const initialState = {
  isLogin: false,
  token: '',
  user: ''
};

function handleSubmitLoginForm(state, action) {
  Auth.setToken(action.password);
  window.location.href = '/';
}

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case types.SUBMIT_LOGIN_FORM:
      return handleSubmitLoginForm(state, action);
    default:
      return state;
  }
};