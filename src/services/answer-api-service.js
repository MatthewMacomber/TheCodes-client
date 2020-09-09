import TokenService from '../services/token-service';
import config from '../config';

const AnswerApiService = {
  getAnswers() { // TODO move to admin service, probably
    return null
  },

  getUserAnswers() {
    return fetch(`${config.API_ENDPOINT}/answers`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
      )
  },

  getUserAnswer(answerId) {
    return fetch(`${config.API_ENDPOINT}/answers/${answerId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
      )
  },
  
  submitAnswer(answer) {
    return fetch(`${config.API_ENDPOINT}/answers`, {
      method: 'POST',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(answer)
    })
      .then(res => 
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
      )
  }
}

export default AnswerApiService;