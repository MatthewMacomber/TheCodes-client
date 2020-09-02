import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import CodeContext from '../../contexts/CodeContext';
import AdminService from '../../services/admin-api-service';
import CodeService from '../../services/code-api-service';


export default class AdminPage extends Component {
  static defaultProps ={
    match: {params: {}}
  }

  static context = CodeContext;

  renderAdmin() {
    return (
      <>
        <button>
          List codes
        </button>
        <button>
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

  listCodes() {
    return (
      <>
        List of codes here.
      </>
    )
  }

  listUsers() {
    return (
      <>
        List of users here.
      </>
    )
  }

  displayUser() {
    return (
      <>
        Display user here.
      </>
    )
  }

  render() {
    return (
      <Section className='AdminPage'>
        <h2>Admin Home</h2>
        {this.renderAdmin()}
      </Section>
    )
  }
}
