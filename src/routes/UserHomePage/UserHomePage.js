import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {NiceDate, Section, Button} from '../../components/Utils/Utils';
import TokenService from '../../services/token-service';
import './UserHomePage.css';

export default class UserHomePage extends Component {
  state = {
    user: {
      user_name: ''
    }
  }

  componentWillMount() {
    const user_name = JSON.parse(TokenService.getAuthToken())["subject"].user_name;
    this.setState({
      user: {user_name},
    })
  }

  render() {
    const user = this.state.user;
    return (
      <Section>
        <div className="user-home">
          <h1>{user.user_name}'s Home</h1>
          <p><NiceDate date={new Date ()}/></p>
          <p>Welcome {user.user_name}, good luck and have fun.</p>
        </div>
        <div className="user-menu">
          <div className="user-menu-item">
            <h2>Solve Codes</h2>
            <Link to="/codes">
              <Button>Solve</Button>
            </Link>
          </div>
          <div className="user-menu-item">
            <h2>Create Codes</h2>
            <Link to="/create">{/* replace with users codes page that has a create code button on it. */}
              <Button>Create</Button>
            </Link>
          </div>
        </div>
      </Section>
    )
  }
}