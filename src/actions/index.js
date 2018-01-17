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
  GET_ALBUM_START: "GET_ALBUM_START",
  GET_ALBUM_SUCCESS: "GET_ALBUM_SUCCESS",
  GET_ALBUM_FAIL: "GET_ALBUM_FAIL",
  ADD_IMAGES_START: "ADD_IMAGES_START",
  ADD_IMAGES_SUCCESS: "ADD_IMAGES_SUCCESS",
  ADD_IMAGES_FAIL: "ADD_IMAGES_FAIL",
  DELETE_IMAGE_START: "DELETE_IMAGE_START",
  DELETE_IMAGE_SUCCESS: "DELETE_IMAGE_SUCCESS",
  DELETE_IMAGE_FAIL: "DELETE_IMAGE_FAIL",
  UPDATE_IMAGE_START: "UPDATE_IMAGE_START",
  UPDATE_IMAGE_SUCCESS: "UPDATE_IMAGE_SUCCESS",
  UPDATE_IMAGE_FAIL: "UPDATE_IMAGE_FAIL",
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
  },
  getAlbum: () => {
    return (dispatch) => {
      dispatch({ type: types.SHOW_LOADING });
      dispatch({ type: types.GET_ALBUM_START });
      return http.get(api.images)
        .then(function(res) {
          dispatch({ type: types.HIDE_LOADING });
          let resData = res.data;
          if(resData.status === 'success') {
            dispatch({
              type: types.GET_ALBUM_SUCCESS,
              images: resData.data
            });
          }else {
            throw resData.msg;
          }
        })
        .catch(function(err) {
          dispatch({ type: types.HIDE_LOADING });
          dispatch({
            type: types.GET_ALBUM_FAIL,
            err: err
          });
        });
      }
  },
  addImages: (images) => {
    return (dispatch) => {
      dispatch({ type: types.SHOW_LOADING });
      dispatch({ type: types.ADD_IMAGES_START });
      let body = JSON.stringify(images);
      return http.post(api.images, body)
        .then(function(res) {
          dispatch({ type: types.HIDE_LOADING });
          let resData = res.data;
          if(resData.status === 'success') {
            dispatch({
              type: types.ADD_IMAGES_SUCCESS,
              images: resData.data
            });
          }else {
            throw resData.msg;
          }
        })
        .catch(function(err) {
          dispatch({ type: types.HIDE_LOADING });
          dispatch({
            type: types.ADD_IMAGES_FAIL,
            err: err
          });
        });
      }
  },
  deleteImage: (id) => {
    return (dispatch) => {
      dispatch({ type: types.SHOW_LOADING });
      dispatch({ type: types.DELETE_IMAGE_START });
      return http.delete(api.images + '/' + id)
        .then(function(res) {
          dispatch({ type: types.HIDE_LOADING });
          let resData = res.data;
          if(resData.status === 'success') {
            dispatch({
              type: types.DELETE_IMAGE_SUCCESS,
              image: resData.data
            });
          }else {
            throw resData.msg;
          }
        })
        .catch(function(err) {
          dispatch({ type: types.HIDE_LOADING });
          dispatch({
            type: types.DELETE_IMAGE_FAIL,
            err: err
          });
        });
      }
  },
  updateImage: (card) => {
    return (dispatch) => {
      dispatch({ type: types.SHOW_LOADING });
      dispatch({ type: types.UPDATE_IMAGE_START });
      return http.put(api.images + '/' + card._id, card)
        .then(function(res) {
          dispatch({ type: types.HIDE_LOADING });
          let resData = res.data;
          if(resData.status === 'success') {
            dispatch({
              type: types.UPDATE_IMAGE_SUCCESS,
              image: resData.data
            });
          }else {
            throw resData.msg;
          }
        })
        .catch(function(err) {
          dispatch({ type: types.HIDE_LOADING });
          dispatch({
            type: types.UPDATE_IMAGE_FAIL,
            err: err
          });
        });
      }
  }
};
