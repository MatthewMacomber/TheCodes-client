import React, {Component} from 'react';
import CodeListContext from '../../contexts/CodeListContext';
import CodeApiService from '../../services/code-api-service';
import {Section} from '../../components/Utils/Utils';
import CodeListItem from '../../components/CodeListItem/CodeListItem';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default class UserCodesPage extends Component {
  static defaultProps ={
    match: {params: {}}
  }

  static contextType = CodeListContext;

  componentDidMount() {
    this.context.clearError();
    // Replace with user_id specific request.
    const user_id = parseInt(JSON.parse(TokenService.getAuthToken())["subject"].user_id)
    console.log(user_id)
    CodeApiService.getUserCodes(user_id)
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
      <Section>
        <div>
          <h2>Your codes:</h2>
        </div>
        <Section list className='CodeListPage'>
          {error ? <p className='red'>There was an error, please try again</p> : this.renderCodes()}
        </Section>
        <Section>
          <Link to=""><input className='add-code-button' type='button' value='+'/></Link>
        </Section>
      </Section>
    )
  }
}