import { types } from "../actions";

const initialState = {
  username: ''
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};