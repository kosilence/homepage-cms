import { http, api } from './api';
import { setToken, clearToken } from './auth';
import { history } from '../store';

export const login = (values) => {
  http.post(api.token, values)
    .then(function(res) {
      let resData = res.data;
      if(resData.status === 'success') {
        setToken(resData.data.token);
        history.push('/');
      }else {
        throw resData.msg;
      }
    })
    .catch(function(err) {
      console.log(err);
    });
}

export const logout = () => {
  clearToken();
  history.push('/login');
}
