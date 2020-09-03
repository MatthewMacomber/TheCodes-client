import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {NiceDate, Hyph} from '../Utils/Utils';

export default class UserListItem extends Component {
  render() {
    const {user} = this.props;
    return (
      <Link to={`/user/${user.id}`} className='UserListItem'>
        <header className='UserListItem__header'>
          <h2 className='UserListItem__heading'>
            {user.user_name}
          </h2>
          <NiceDate date={user.date_created} />
        </header>
        <footer className='UserListItem__footer'>
          {user.id && <>
            User ID: {user.id}
          </>}
        </footer>
      </Link>
    )
  }
}
