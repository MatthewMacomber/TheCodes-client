import config from '../config';

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  hasAdminToken() {
    let token = TokenService.getAuthToken();
    if (!token) {
      return false;
    }
    let jwtData = token.split('.')[1];
    let decodedJwtJson = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJson);
    if (decodedJwtData.role !== 'admin') {
      return false;
    }
    return true;
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  }
};

export default TokenService;