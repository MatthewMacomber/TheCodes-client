import React, {Component} from 'react';
import {Button, Input, Required} from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import './RegisterForm.css';

export default class RegisterForm extends Component {
  static defaultProps = {
    onRegisterSuccess: () => {}
  }

  state = {error: null};

  handleSubmit = ev => {
    ev.preventDefault();
    const {full_name, nick_name, user_name, password} = ev.target;

    this.setState({error: null});
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
      nickname: nick_name.value
    })
    .then(user => {
      full_name.value = '';
      nick_name.value = '';
      user_name.value = '';
      password.value = '';
      this.props.onRegisterSuccess();
    })
  };

  render() {
    const {error} = this.state;
    return (
      <form className='RegisterForm' onSubmit={this.handleSubmit}>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='full_name'>
          <label htmlFor='RegisterForm__full_name'>
            Full name <Required />
          </label>
          <Input
            name='full_name'
            type='text'
            required
            id='RegisterForm__full_name'
          />
        </div>
        <div className='user_name'>
          <label htmlFor='RegisterForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegisterForm__user_name'
          />
        </div>
        <div className='password'>
          <label htmlFor='RegisterForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegisterForm__password'
          />
        </div>
        <div className='nick_name'>
          <label htmlFor='RegisterForm__nick_name'>
            Nickname
          </label>
          <Input
            name='nick_name'
            type='text'
            required
            id='RegistrerForm__nick_name'
          />
        </div>
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  }
}