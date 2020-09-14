import TokenService from '../services/token-service';
import config from '../config';

const CodeApiService = {
  getCodes() {
    return fetch(`${config.API_ENDPOINT}/codes`, {
      headers: {}
    })
      .then(res => 
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
      );
  },
  getCode(codeId) {
    return fetch(`${config.API_ENDPOINT}/codes/${codeId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
      );
  },
  getUserCodes() {
    return fetch(`${config.API_ENDPOINT}/codes/usercodes`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
      );
  },
  postCode(code) {
    return fetch(`${config.API_ENDPOINT}/codes/usercodes`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(code)
    })
      .then(res =>
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
      );
  }
};

export default CodeApiService;