import React, {Component} from 'react';
//import CodeListContext from '../../contexts/CodeListContext';
//import CodeApiService from '../../services/code-api-service';
import AdminApiService from '../../services/admin-api-service';
import {Section} from '../../components/Utils/Utils';
//import CodeListItem from '../../components/CodeListItem/CodeListItem';

export default class CodeListPage extends Component {
  static defaultProps = {
    match: { params: {} }
  }

  state = {
    error: null
  }
  
  //static contextType = CodeListContext;

  componentDidMount() {
    this.context.clearError();
    AdminApiService.getUsers()
      .then(this.context.setCodeList)
      .catch(this.context.setError)
  }

  renderUsers() {
    const {codeList = []} = this.context;
    return codeList.map(code => 
      <CodeListItem
        key={code.id}
        code={code}
      />
    )
  }

  render() {
    const {error} = this.state;
    return (
      <Section list className='UserListPage'>
        {error ? <p className='red'>There was an error, please try again</p> : this.renderUsers()}
      </Section>
    )
  }
}
