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
    const token = TokenService.getAuthToken();
    if (!token) {
      return 'UserNameError'
    }
    const jwtData = token.split('.')[1];
    const decodedJwtJson = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJson);
    const user_name = decodedJwtData.sub;
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
              <Button className='user-menu-button'>Solve</Button>
            </Link>
          </div>
          <div className="user-menu-item">
            <h2>Create Codes</h2>
            <Link to="/create">
              <Button className='user-menu-button'>Create</Button>
            </Link>
          </div>
        </div>
      </Section>
    )
  }
}