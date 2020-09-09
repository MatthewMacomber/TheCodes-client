import TokenService from '../services/token-service';
import config from '../config';

const RequestApiService = {
  getRequests() {
    return fetch(`${config.API_ENDPOINT}/requests`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
      )
  },

  getRequest(id) {
    return fetch(`${config.API_ENDPOINT}/requests/${id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
      )
  },

  deleteRequest(id) {
    return fetch(`${config.API_ENDPOINT}/requests/${id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
      )
  },
  
  submitRequest(request) {
    console.log(request)
    return fetch(`${config.API_ENDPOINT}/requests`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    })
      .then(res => 
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
      )
  }
};

export default RequestApiService;