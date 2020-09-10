import React, {Component} from 'react';
import CodeContext, {nullCode} from '../../contexts/CodeContext';
import CodeApiService from '../../services/code-api-service';
import {NiceDate, Hyph, Section} from '../../components/Utils/Utils';
import SubmitAnswerForm from '../../components/SubmitAnswerForm/SubmitAnswerForm';
import './CodePage.css';

export default class CodePage extends Component {
  static defaultProps = {
    match: {params: {}}
  }

  static contextType = CodeContext

  componentDidMount() {
    const {codeId} = this.props.match.params;
    this.context.clearError();
    CodeApiService.getCode(codeId)
      .then(this.context.setCode)
      .catch(this.context.setError)
  }

  componentWillMount() {
    this.context.clearCode()
  }

  handleSubmitAnswerSuccess = answer => {
    const {history} = this.props;
    history.push(`/answer/${answer.id}`);
  }

  renderCode() {
    const {code} = this.context
    return (
      <>
        <h3>Viewing:</h3>
        <div className='ViewCode'>
          <h2>{code.title}</h2>
          <p>
            <span className='CodePage__style' />
            {code.user_name && <>
              <CodeAuthor code={code} />
            </>}
            <Hyph />
            <NiceDate date={code.date_created} />
          </p>
          <CodeContent code={code} />
          <SubmitAnswerForm onSubmitAnswerSuccess={this.handleSubmitAnswerSuccess} code_id={code.id}/>
        </div>
      </>
    )
  }

  render() {
    const {error, code} = this.context;
    let content;
    if (error) {
      content = (error.error === `Code doesn't exist`)
        ? <p className='red'>Code not found</p>
        : <p className='red'>There was an error</p>
    } else if (!code.id) {
      content = <div className='loading' />
    } else {
      content = this.renderCode()
    }

    return (
      <Section className='CodePage'>
        {content}
      </Section>
    )
  }
}

function CodeAuthor({code = nullCode}) {
  return (
    <span className='CodePage__author'>
      {code.user_name}
    </span>
  )
}

function CodeContent({code  = nullCode}) {
  return (
    <blockquote className='CodePage__content'>
      {code.content}
    </blockquote>
  )
}