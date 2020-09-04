import React, {Component} from 'react';
import CreateCodeForm from '../../components/CreateCodeForm/CreateCodeForm';
import {Section} from '../../components/Utils/Utils';

export default class CreateCodePage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  }

  handleCreateCodeSuccess = code => {
    const {history} = this.props;
    history.push(`/code/${code.id}`);
  }

  render() {
    return (
      <Section className='CreateCodePage'>
        <h2>Create Code</h2>
        <CreateCodeForm
          onCreateCodeSuccess={this.handleCreateCodeSuccess}
        />
      </Section>
    )
  }
}
