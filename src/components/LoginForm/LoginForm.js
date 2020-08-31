import React, {Component} from 'react';
import {Button, Input} from '../Utils/Utils';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = {error: null}

  handleSubmitJwtAuth = ev => {
    // add handling of the jwt auth here.
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
};