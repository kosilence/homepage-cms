import Auth from '../helpers/auth';
import { push } from 'react-router-redux';
import api from '../helpers/api';

export const types = {
  FETCH_AUTH_TOKEN_START: "FETCH_AUTH_TOKEN_START",
  FETCH_AUTH_TOKEN_SUCCESS: "FETCH_AUTH_TOKEN_SUCCESS",
  FETCH_AUTH_TOKEN_FAIL: "FETCH_AUTH_TOKEN_FAIL",
  SHOW_LOADING: "SHOW_LOADING",
  HIDE_LOADING: "HIDE_LOADING"
};

export const actions = {
  submitLoginForm: (values) => ({
    type: types.SUBMIT_LOGIN_FORM,
    user: values.user,
    password: values.password
  }),
  fetchAuthToken: (values) => {
    return (dispatch) => {
      dispatch({ type: types.SHOW_LOADING });
      dispatch({ type: types.FETCH_AUTH_TOKEN_START });
      let body = JSON.stringify(values);
      return api.post('auth', body)
        .then(function(res) {
          dispatch({ type: types.HIDE_LOADING });
          let resData = res.data;
          if(resData.status === 'success') {
            Auth.setToken(resData.data.token);
            dispatch(push('/'));
            dispatch({
              type: types.FETCH_AUTH_TOKEN_SUCCESS,
              data: resData.data
            });
          }else {
            throw resData.msg;
          }
        })
        .catch(function(err) {
          dispatch({
            type: types.fetchAuthTokenFail,
            err: err
          });
        });
  }}
};
