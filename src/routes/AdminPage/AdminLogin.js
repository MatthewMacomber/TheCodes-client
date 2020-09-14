import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import AdminLoginForm from '../../components/LoginForm/AdminLoginForm';

export default class AdminLogin extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleAdminLoginSuccess = () => {
    const {location, history} = this.props;
    const destination = (location.state || {}).from || '/admin/panel';
    history.push(destination);
    this.props.login(true);
  };
  
  render() {
    return (
      <Section className='LoginPage'>
        <h2>Admin Login</h2>
        <AdminLoginForm
          onLoginSuccess={this.handleAdminLoginSuccess}
        />
      </Section>
    );
  };
};