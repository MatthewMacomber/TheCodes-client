import React, {Component} from 'react';

const CodeListContext = React.createContext({
  codeList:[],
  error: null,
  setError: () => {},
  clearError: () => {},
  setCodeList: () => {}
})

export default CodeListContext;

export class CodeListProvider extends Component {
  state = {
    codeList: [],
    error: null
  }

  setCodeList = codeList => {
    console.log('Setting codeList to:');
    console.log(codeList);
    this.setState({codeList})
  }

  setError = error => {
    console.log(error)
    this.setState({error})
  }

  clearError = () => {
    this.setState({error: null})
  }

  render() {
    const value = {
      codeList: this.state.codeList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCodeList: this.setCodeList
    }
    return (
      <CodeListContext.Provider value={value}>
        {this.props.children}
      </CodeListContext.Provider>
    )
  }
}