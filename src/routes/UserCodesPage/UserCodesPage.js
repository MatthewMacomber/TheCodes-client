import React, {Component} from 'react';
import CodeListContext from '../../contexts/CodeListContext';
import CodeApiService from '../../services/code-api-service';
import {Section} from '../../components/Utils/Utils';
import CodeListItem from '../../components/CodeListItem/CodeListItem';
import { Link } from 'react-router-dom';
import './UserCodesPage.css'

export default class UserCodesPage extends Component {
  static defaultProps = {
    match: {params: {}}
  };

  static contextType = CodeListContext;

  componentDidMount() {
    this.context.clearError();
    CodeApiService.getUserCodes()
      .then(res => this.context.setCodeList(res))
      .catch(this.context.setError);
  };

  renderCodes() {
    const {codeList = []} = this.context;
    return codeList.map(code =>
      <CodeListItem
        key={code.id}
        code={code}
      />
    );
  };

  render() {
    const {error} = this.context;
    return (
      <Section className='usercodepagebody'>
        <div>
          <h2>Your codes:</h2>
        </div>
        <Section className='other'>
          <Link to="/createcode"><input className='add-code-button' type='button' value='+'/></Link>
        </Section>
        <Section list className='UserCodesPage'>
          {error ? <p className='red'>There was an error, please try again</p> : this.renderCodes()}
        </Section>
        
      </Section>
    );
  };
};