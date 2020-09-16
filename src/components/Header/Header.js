import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.props.login(false);
  };

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      this.props.login(true);
    }
  };

  loadUsername() {
    const token = TokenService.getAuthToken();
    if (!token) {
      return 'UserNameError';
    }
    const jwtData = token.split('.')[1];
    const decodedJwtJson = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJson);
    const user_name = decodedJwtData.sub;
    return user_name;
  };

  renderLogoutLink() {
    return (
      <ul className='Header__logged_in'>
        <li>
          <Link
            to='/codes'>
            Solve Codes
          </Link>
        </li>
        <li>
          <Link
            to='/userhome'>
            My Home
          </Link>
        </li>
        <li>
          <Link
            to='/answers'>
            My Answers
          </Link>
        </li>
        <li>
          <Link
            onClick={this.handleLogoutClick}
            to='/'>
            Logout
          </Link>
        </li>
        <li>
          {this.loadUsername()}
        </li>
      </ul>
    );
  };

  renderLoginLink() {
    return (
      <ul className='Header__not-logged-in'>
        <li>
          <Link
            to='/codes'>
            View Codes
          </Link>
        </li>
        <li>
          <Link
            to='/register'>
            Register
          </Link>
        </li>
        <li>
          <Link
            to='/login'>
            Log in
          </Link>
        </li>
      </ul>
    );
  };

  render() {
    return (
      <>
        <h1>
          <Link to='/' className='logo' title='The Codes Home'>
            The Codes
          </Link>
        </h1>
        {this.props.loggedIn ? this.renderLogoutLink() : this.renderLoginLink()}
      </>
    );
  };
};