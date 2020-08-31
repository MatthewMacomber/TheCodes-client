import React, {Component} from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import {Section} from '../../components/Utils/Utils';

export default class RegisterPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  }

  handlerRegisterSuccess = user => {
    const {history} = this.props;
    history.push('/login');
  };

  render () {
    return (
      <Section className='RegisterPage'>
        <h2>Register</h2>
        <RegisterForm
          onRegisterSuccess={this.handlerRegisterSuccess}
        />
      </Section>
    );
  };
};