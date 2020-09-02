import config from '../config';
import TokenService from './token-service';

const AuthApiService = {
  postLogin({ user_name, password }) {
    return fetch(`${config.API_ENDPOINT}/admin/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user_name, password }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        return res
      })
    }
};

export default AuthApiService;