import Auth from '../helpers/auth';
import { push } from 'react-router-redux';

export const types = {
  SUBMIT_LOGIN_FORM: "SUBMIT_LOGIN_FORM"
};

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

export const actions = {
  submitLoginForm: (values) => ({
    type: types.SUBMIT_LOGIN_FORM,
    user: values.user,
    password: values.password
  }),
  fetchAuthToken: (values) => {
    return (dispatch) => {
      return fetch('http://localhost:3001/api/auth', {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(values)
        })
        .then(res =>
          res.json().then(resJson => {
            if (!res.ok) {
              return false;
            }
            if(resJson.status === 'success') {
              Auth.setToken(resJson.data.token);
              dispatch(push('/'));
            }
          })
        )
  }}
};