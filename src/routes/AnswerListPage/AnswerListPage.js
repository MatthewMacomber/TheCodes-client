import React, {Component} from 'react';
import CodeListContext from '../../contexts/CodeListContext';
import CodeApiService from '../../services/code-api-service';
import {Section} from '../../components/Utils/Utils';
import CodeListItem from '../../components/CodeListItem/CodeListItem';

export default class CodeListPage extends Component {
  static defaultProps = {
    match: { params: {} }
  }
  
  static contextType = CodeListContext;

  componentDidMount() {
    this.context.clearError();
    CodeApiService.getCodes()
      .then(res => this.context.setCodeList(res))
      .catch(this.context.setError)
  }

  renderCodes() {
    const {codeList = []} = this.context;
    return codeList.map(code => 
      <CodeListItem
        key={code.id}
        code={code}
      />
    )
  }

  render() {
    const {error} = this.context;
    return (
      <Section list className='CodeListPage'>
        {error ? <p className='red'>There was an error, please try again</p> : this.renderCodes()}
      </Section>
    )
  }
}
