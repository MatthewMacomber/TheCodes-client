import React, {Component} from 'react';
import AdminApiService from '../../services/admin-api-service';
import {Section} from '../../components/Utils/Utils';
import UserListItem from '../../components/UserListItem/UserListItem';

export default class UserListPage extends Component {
  static defaultProps = {
    match: { params: {} }
  }

  state = {
    userList: [],
    error: null
  }
  
  setError = error => {
    console.log(error)
    this.setState({error})
  }

  clearError = () => {
    this.setState({error: null})
  }

  setUserList = userList => {
    this.setState({userList})
  }

  componentDidMount() {
    this.clearError();
    AdminApiService.getUsers()
      .then(res => this.setUserList(res))
      .then(console.log(this.state.userList))
      .catch(this.setError)
  }

  renderUsers() {
    const userList = this.state.userList;
    return userList.map(user => 
      <UserListItem
        key={user.id}
        user={user}
      />
    )
  }

  render() {
    const {error} = this.state;
    return (
      <Section list className='UserListPage'>
        <p>UserList:</p>
        {error ? <p className='red'>There was an error, please try again</p> : this.renderUsers()}
      </Section>
    )
  }
}
