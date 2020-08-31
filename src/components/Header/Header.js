import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  handleLogoutClick = () => {
    //insert tokenservice to clear authtoken.
  }
  renderLogoutLink() {
    return (
      <div>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>
            {' '}
            The Codes - client
          </Link>
        </h1>
        {/* Add tokenservice check for having authtoken to change between login and logout link */}
      </nav>
    )
  }
}