import React, {Component} from 'react';
import AdminApiService from '../../services/admin-api-service';
import {Section} from '../../components/Utils/Utils';
import UserListItem from '../../components/UserListItem/UserListItem';

export default class UserListPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  state = {
    userList: [],
    error: null
  };
  
  setError = error => {
    this.setState({error});
  };

  clearError = () => {
    this.setState({error: null});
  };

  setUserList = userList => {
    this.setState({userList});
  };

  componentDidMount() {
    this.clearError();
    AdminApiService.getUsers()
      .then(res => this.setUserList(res))
      .catch(this.setError);
  };

  renderUsers() {
    const userList = this.state.userList;
    return userList.map(user => 
      <UserListItem
        key={user.id}
        user={user}
      />
    );
  };

  render() {
    const {error} = this.state;
    return (
      <Section list className='UserListPage'>
        <p>User List:</p>
        {error ? <p className='red'>There was an error, please try again</p> : this.renderUsers()}
      </Section>
    );
  };
}
