export const TOKEN_NAME = '__TOKEN__';
export const USER_NAME = '__USER__';

const Auth = {
  getToken: function() {
    return window.localStorage.getItem(TOKEN_NAME) ? window.localStorage.getItem(TOKEN_NAME) : '';
  },
  getUser: function() {
    return window.localStorage.getItem(USER_NAME) ? window.localStorage.getItem(USER_NAME) : '';
  },
  setToken: function(token) {
    window.localStorage.setItem(TOKEN_NAME, token);
    let tokenInfo = JSON.parse(atob(token.split('.')[1]));
    window.localStorage.setItem(USER_NAME, tokenInfo.username);
  },
  clearToken: function() {
    window.localStorage.setItem(TOKEN_NAME, '');
    window.localStorage.setItem(USER_NAME, '');
  },
  isAuthed: function() {
    let token = this.getToken();
    if(!token) {
      return false;
    }
    let tokenInfo = JSON.parse(atob(token.split('.')[1]));
    let currentTime = Date.now() / 1000;
    if(tokenInfo.exp < currentTime) {
      this.clearToken();
      return false;
    }
    return true;
  }
}

export default Auth;