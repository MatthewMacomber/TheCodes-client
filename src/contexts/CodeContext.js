import React, {Component} from 'react';
import { isThisSecond } from 'date-fns';

export const nullCode = {
  author: {},
}

const CodeContext = React.createContext({
  code: nullCode,
  error: null,
  setError: () => {},
  clearError: () => {},
  setCode: () => {},
  clearCode: () => {},
})

export default CodeContext;

export class CodeProvider extends Component {
  state = {
    code: nullCode,
    error: null
  };

  setError = error => {
    console.log(error);
    this.setState({error});
  }

  clearError = () => {
    this.setState({error: null});
  }

  setCode = code => {
    this.setState({code});
  }

  clearCode = () => {
    this.setCode(nullCode);
  }

  render() {
    const value = {
      code: this.state.code,
      error: this.state.error,
    }

    return (
      <CodeContext.Provider value={value}>
        {this.props.children}
      </CodeContext.Provider>
    )
  }
}