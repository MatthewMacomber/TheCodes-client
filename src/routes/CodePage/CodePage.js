import React, {Component} from 'react';
import CodeContext, {nullCode} from '../../contexts/CodeContext';
import CodeApiService from '../../services/code-api-service';
import {NiceDate, Hyph, Section} from '../../components/Utils/Utils';
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

  renderCode() {
    const {code} = this.context
    return (
      <>
        <h2>{code.title}</h2>
        <p>
          <span className='CodePage__style' />
          {code.user_id && <>
            <Hyph />
            <CodeAuthor code={code} />
          </>}
          <Hyph />
          <NiceDate date={code.date_created} />
        </p>
        <CodeContent code={code} />
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
      {code.user_id}
    </span>
  )
}

function CodeContent({code}) {
  return (
    <p className='CodePage__content'>
      {code.content}
    </p>
  )
}