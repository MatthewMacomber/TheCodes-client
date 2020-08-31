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
    const {error} = this.state;
    return (
      <form className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='LoginForm__user_name'
          />
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            name='password'
            type='password'
            required
            id='LoginForm__password'
          />
        </div>
        <Button type='submit'>
          Login
        </Button>
      </form>
    )
  }
};