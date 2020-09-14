import React, {Component} from 'react';
import AdminApiService from '../../services/admin-api-service';
import {NiceDate, Hyph, Section} from '../../components/Utils/Utils';

export default class UserPage extends Component {
  static defaultProps = {
    match: {params: {}}
  };

  state = {
    user: null,
    error: null
  };

  setError = error => {
    this.setState({error});
  };

  clearError = () => {
    this.setState({error: null});
  };

  setUser = user => {
    this.setState({user});
  };

  componentDidMount() {
    const {user_id} = this.props.match.params;
    this.clearError();
    AdminApiService.getUser(user_id)
      .then(res => this.setUser(res))
      .catch(this.setError);
  };

  renderUser = () => {
    const user = this.state.user;
    if (!user) {
      return null;
    }
    return (
      <>
        <header>
          <h2>Username <Hyph /> {user.user_name}</h2>
          Date Registered: <NiceDate date={user.date_created} />
        </header>
        <Section>
          <p>Nickname: {user.nickname}</p>
          <p>Fullname: {user.full_name}</p>
          <p>Last Modified: {user.date_modified}</p>
        </Section>
        <footer>
          User ID <Hyph /> {user.id}
        </footer>
      </>
    );
  };

  render() {
    const {error} = this.state;
    return (
      <>
        {error ? <p className="red">There was an error, please try again.</p> : this.renderUser()}
      </>
    );
  };
};