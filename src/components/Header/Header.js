import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';
import {Hyph} from '../Utils/Utils';
import './Header.css';

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.props.login(false);
  }

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      this.props.login(true);
    }
  }

  loadUsername() {
    const token = TokenService.getAuthToken();
    if (!token) {
      return 'UserNameError'
    }
    const jwtData = token.split('.')[1];
    const decodedJwtJson = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJson);
    const user_name = decodedJwtData.sub;
    return user_name;
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged_in'>
        <Link
          to='/codes'>
          Solve Codes
        </Link>
        <Hyph />
        <Link
          to='/userhome'>
          My Home
        </Link>
        <Hyph />
        <Link
          to='/answers'>
          My Answers
        </Link>
        <Hyph />
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
        <Hyph />
        {this.loadUsername()}
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/codes'>
          View Codes
        </Link>
        <Hyph />
        <Link
          to='/register'>
          Register
        </Link>
        <Hyph />
        <Link
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>
            The Codes
          </Link>
        </h1>
        {this.props.loggedIn ? this.renderLogoutLink() : this.renderLoginLink()}
      </nav>
    )
  }
}