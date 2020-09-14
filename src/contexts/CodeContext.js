import React, {Component} from 'react';

export const nullCode = {
  user_id: {},
};

const CodeContext = React.createContext({
  code: nullCode,
  error: null,
  setError: () => {},
  clearError: () => {},
  setCode: () => {},
  clearCode: () => {}
});

export default CodeContext;

export class CodeProvider extends Component {
  state = {
    code: nullCode,
    error: null
  };

  setError = error => {
    this.setState({error});
  };

  clearError = () => {
    this.setState({error: null});
  };

  setCode = code => {
    this.setState({code});
  };

  clearCode = () => {
    this.setCode(nullCode);
  };

  render() {
    const value = {
      code: this.state.code,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCode: this.setCode,
      clearCode: this.clearCode
    };

    return (
      <CodeContext.Provider value={value}>
        {this.props.children}
      </CodeContext.Provider>
    );
  };
};