import { types } from "../actions";

const initialState = {
  loading: false
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case types.SHOW_LOADING:
      return { ...state, loading: true };
    case types.HIDE_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};