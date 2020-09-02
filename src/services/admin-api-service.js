import config from '../config';
import TokenService from './token-service';

const AdminApiService = {
  getUsers() {
    return fetch(`${config.API_ENDPOINT}/admin/users`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
      )
  },
  getUser(user_id) {
    return fetch(`${config.API_ENDPOINT}/admin/user/${user_id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
      )
  }
}

export default AdminApiService;