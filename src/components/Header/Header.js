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

  renderLogoutLink() {
    return (
      <div className='Header__logged_in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
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