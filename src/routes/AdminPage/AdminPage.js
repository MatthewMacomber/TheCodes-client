import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import CodeListPage from '../CodeListPage/CodeListPage';
import UserListPage from '../UserListPage/UserListPage';
import AdminService from '../../services/admin-api-service';
import CodeApiService from '../../services/code-api-service';
import CodeListItem from '../../components/CodeListItem/CodeListItem';

export default class AdminPage extends Component {
  static defaultProps ={
    match: {params: {}}
  }

  state = {
    content: []
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
        <div>
          <input type="text" />
          <button>
            Display User
          </button>
        </div>
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

  renderUser = () => {
    this.setState({
      content: <>A User</>
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
