export const TOKEN_NAME = '__TOKEN__';
export const USER_NAME = '__USER__';

export const getToken = () => {
  return window.localStorage.getItem(TOKEN_NAME) ? window.localStorage.getItem(TOKEN_NAME) : '';
}

export const getUser = () => {
  return window.localStorage.getItem(USER_NAME) ? window.localStorage.getItem(USER_NAME) : '';
}

export const setToken = (token) => {
  window.localStorage.setItem(TOKEN_NAME, token);
  let tokenInfo = JSON.parse(atob(token.split('.')[1]));
  window.localStorage.setItem(USER_NAME, tokenInfo.username);
}

export const clearToken = () => {
  window.localStorage.setItem(TOKEN_NAME, '');
  window.localStorage.setItem(USER_NAME, '');
}

export const isAuthed = () => {
  let token = getToken();
  if(!token) {
    return false;
  }
  let tokenInfo = JSON.parse(atob(token.split('.')[1]));
  let currentTime = Date.now() / 1000;
  if(tokenInfo.exp < currentTime) {
    clearToken();
    return false;
  }
  return true;
}
