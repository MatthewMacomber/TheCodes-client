import TokenService from '../services/token-service';
import config from '../config';

const CodeApiService = {
  getCodes() {
    return fetch(`${config.API_ENDPOINT}/codes`, {
      headers: {}
    })
      .then(res => 
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
      )
  },
  getCode(codeId) {
    return fetch(`${config.API_ENDPOINT}/codes/${codeId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
      )
  },
  // verify user via authtoken instead of passing user_id.
  getUserCodes() {
    return fetch(`${config.API_ENDPOINT}/codes/usercodes`, {
      headers : {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
      )
  }
}

export default CodeApiService;