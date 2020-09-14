import React, {Component} from 'react';
import AdminApiService from '../../services/admin-api-service';
import AnswerApiService from '../../services/answer-api-service';
import RequestApiService from '../../services/requests-api-service';
import {Section} from '../../components/Utils/Utils';
import CodeListPage from '../CodeListPage/CodeListPage';
import UserListPage from '../UserListPage/UserListPage';
import UserListItem from '../../components/UserListItem/UserListItem';
import AnswerListPage from '../AnswerListPage/AnswerListPage';
import AnswerListItem from '../../components/AnswerListItem/AnswerListItem';
import RequestListPage from '../RequestListPage/RequestListPage';
import RequestListItem from '../../components/RequestListItem/RequestListItem';


export default class AdminPage extends Component {
  static defaultProps ={
    match: {params: {}}
  };

  state = {
    content: [],
    user: null
  };

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
        <button onClick={this.renderAnswerList}>
          List Answers
        </button>
        <form onSubmit={this.renderAnswer}>
          <input type="text" name="answer_id" placeholder="Answer ID #"/>
          <button type="submit">
            Display Answer
          </button>
        </form>
        <button onClick={this.renderRequestsList}>
          List Requests
        </button>
        <form onSubmit={this.renderRequest}>
          <input type="text" name="request_id" placeholder="Request ID #"/>
          <button type="submit">
            Display Request
          </button>
        </form>
      </>
    );
  };

  renderCodes = () => {
    this.setState({
      content: <CodeListPage />
    });
  };

  renderUserList = () => {
    this.setState({
      content: <UserListPage />
    });
  };

  renderUser = e => {
    e.preventDefault();
    const {user_id} = e.target;
    AdminApiService.getUser(parseInt(user_id.value))
      .then(res => this.setUser(res));
  };

  setUser = user => {
    this.setState({
      content: <UserListItem user={user} />
    });
  };

  renderAnswerList = () => {
    this.setState({
      content: <AnswerListPage />
    });
  };

  renderAnswer = e => {
    e.preventDefault();
    const {answer_id} = e.target;
    AnswerApiService.getUserAnswer(answer_id.value)
      .then(res => this.setAnswer(res));
  };

  setAnswer = answer => {
    this.setState({
      content: <AnswerListItem answer={answer} />
    });
  };

  renderRequestsList = () => {
    this.setState({
      content: <RequestListPage />
    });
  };

  renderRequest = e => {
    e.preventDefault();
    const {request_id} = e.target;
    RequestApiService.getRequest(request_id.value)
      .then(res => this.setRequest(res))
      .catch(res => {
        this.setState({error: res.error});
      });
  };

  setRequest = request => {
    this.setState({
      content: <RequestListItem request={request} />
    });
  };

  render() {
    const {error} = this.context;
    let content = this.state.content;
    return (
      <Section className='AdminPage'>
        {this.renderAdmin()}
        {error ? <p className='red'>There was an error, please try again</p> : content}
      </Section>
    );
  };
};
