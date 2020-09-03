import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import CodeListPage from '../CodeListPage/CodeListPage';
import UserListPage from '../UserListPage/UserListPage';
import AdminService from '../../services/admin-api-service';
import CodeApiService from '../../services/code-api-service';
import CodeListItem from '../../components/CodeListItem/CodeListItem';
import AdminApiService from '../../services/admin-api-service';
import UserListItem from '../../components/UserListItem/UserListItem';

export default class AdminPage extends Component {
  static defaultProps ={
    match: {params: {}}
  }

  state = {
    content: [],
    user: null
  }

  renderAdmin() {
    return (
      <>
        <h2>Admin Home</h2>
        <button onClick={this.renderCodes}>
          List codes
        </button>
        <button onClick={this.renderUserList}>
          List users
        </button>
        <form onSubmit={this.renderUser}>
          <input type="text" name="user_id" placeholder="User ID #"/>
          <button type="submit">
            Display User
          </button>
        </form>
      </>
    )
  }

  renderCodes = () => {
    this.setState({
      content: <CodeListPage />
    })
  }


  renderUserList = () => {
    this.setState({
      content: <UserListPage />
    })
  }

  renderUser = e => {
    e.preventDefault();
    const {user_id} = e.target;
    AdminApiService.getUser(parseInt(user_id.value))
    .then(res => this.setUser(res))
  }

  setUser = user => {
    this.setState({
      content: <UserListItem user={user}/>
    })
  }

  render() {
    const {error} = this.context;
    let content = this.state.content;
    return (
      <Section className='AdminPage'>
        {this.renderAdmin()}
        {error ? <p className='red'>There was an error, please try again</p> : content}
      </Section>
    )
  }
}
