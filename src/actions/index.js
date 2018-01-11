import Auth from '../helpers/auth';
import { push } from 'react-router-redux';
import { http, api } from '../helpers/api';

export const types = {
  SHOW_LOADING: "SHOW_LOADING",
  HIDE_LOADING: "HIDE_LOADING",
  GET_AUTH_TOKEN_START: "GET_AUTH_TOKEN_START",
  GET_AUTH_TOKEN_SUCCESS: "GET_AUTH_TOKEN_SUCCESS",
  GET_AUTH_TOKEN_FAIL: "GET_AUTH_TOKEN_FAIL",
  GET_BLOG_START: "GET_BLOG_START",
  GET_BLOG_SUCCESS: "GET_BLOG_SUCCESS",
  GET_BLOG_FAIL: "GET_BLOG_FAIL",
  UPDATE_BLOG_START: "UPDATE_BLOG_START",
  UPDATE_BLOG_SUCCESS: "UPDATE_BLOG_SUCCESS",
  UPDATE_BLOG_FAIL: "UPDATE_BLOG_FAIL",
};

export const actions = {
  submitLoginForm: (values) => ({
    type: types.SUBMIT_LOGIN_FORM,
    user: values.user,
    password: values.password
  }),
  getAuthToken: (values) => {
    return (dispatch) => {
      dispatch({ type: types.SHOW_LOADING });
      dispatch({ type: types.GET_AUTH_TOKEN_START });
      let body = JSON.stringify(values);
      return http.post(api.token, body)
        .then(function(res) {
          dispatch({ type: types.HIDE_LOADING });
          let resData = res.data;
          if(resData.status === 'success') {
            Auth.setToken(resData.data.token);
            dispatch(push('/'));
            dispatch({
              type: types.GET_AUTH_TOKEN_SUCCESS,
              data: resData.data
            });
          }else {
            throw resData.msg;
          }
        })
        .catch(function(err) {
          dispatch({
            type: types.GET_AUTH_TOKEN_FAIL,
            err: err
          });
        });
  }},
  getBlog: () => {
    return (dispatch) => {
      dispatch({ type: types.SHOW_LOADING });
      dispatch({ type: types.GET_BLOG_START });
      return http.get(api.blog)
        .then(function(res) {
          dispatch({ type: types.HIDE_LOADING });
          let resData = res.data;
          if(resData.status === 'success') {
            dispatch({
              type: types.GET_BLOG_SUCCESS,
              blog: resData.data
            });
          }else {
            throw resData.msg;
          }
        })
        .catch(function(err) {
          dispatch({ type: types.HIDE_LOADING });
          dispatch({
            type: types.GET_BLOG_FAIL,
            err: err
          });
        });
      }
  },
  updateBlog: () => {
    return (dispatch) => {
      dispatch({ type: types.SHOW_LOADING });
      dispatch({ type: types.UPDATE_BLOG_START });
      return http.post(api.blog)
        .then(function(res) {
          dispatch({ type: types.HIDE_LOADING });
          let resData = res.data;
          if(resData.status === 'success') {
            dispatch({
              type: types.UPDATE_BLOG_SUCCESS,
              blog: resData.data
            });
          }else {
            throw resData.msg;
          }
        })
        .catch(function(err) {
          dispatch({ type: types.HIDE_LOADING });
          dispatch({
            type: types.UPDATE_BLOG_FAIL,
            err: err
          });
        });
      }
  }
};
