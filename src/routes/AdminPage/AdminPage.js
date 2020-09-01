import React, {Component} from 'react';

export default class AdminPage extends Component {
  static defaultProps ={
    match: {params: {}}
  }

  renderAdmin() {
    return (
      <div>
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
      </div>
    )
  }

  render() {
    return (
      <>
        <h2>Admin Home</h2>
        {this.renderAdmin()}
      </>
    )
  }
}
