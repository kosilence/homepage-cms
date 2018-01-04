import { types } from "../actions";

const initialState = {
  username: ''
};

function handleSubmitLoginForm(state, action) {
}

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case types.SUBMIT_LOGIN_FORM:
      return handleSubmitLoginForm(state, action);
    default:
      return state;
  }
};