const Auth = {
  getToken: function() {
    return window.localStorage.getItem('__TOKEN__') ? window.localStorage.getItem('__TOKEN__') : '';
  },
  setToken: function(token) {
    window.localStorage.setItem('__TOKEN__', token);
    return true;
  }
}

export default Auth;