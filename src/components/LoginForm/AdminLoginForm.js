import React, {Component} from 'react';
import {Button, Input} from '../Utils/Utils';
import TokenService from '../../services/token-service';
import AdminAuthApiService from '../../services/admin-auth-api-service';

export default class AdminLoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = {error: null};

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({error: null});
    const {user_name, password} = ev.target;

    AdminAuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({error: res.error});
      });
  };

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
    );
  };
};