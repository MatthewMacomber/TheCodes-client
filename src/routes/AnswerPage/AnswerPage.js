import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AnswerApiService from '../../services/answer-api-service';
import RequestApiService from '../../services/requests-api-service';
import {NiceDate, Hyph, Section, Input} from '../../components/Utils/Utils';
import './AnswerPage.css'

export default class AnswerPage extends Component {
  static defaultProps = {
    match: {params: {}}
  }

  state = {
    answer: null,
    error: null,
    verifySuccess: false,
  }

  setError = error => {
    console.log(error)
    this.setState({error})
  }

  clearError = () => {
    this.setState({error: null})
  }

  setAnswer = answer => {
    this.setState({answer})
  }

  componentDidMount() {
    const {answer_id} = this.props.match.params;
    this.clearError();
    AnswerApiService.getUserAnswer(answer_id)
      .then(res => this.setAnswer(res))
      .catch(this.setError)
  }

  verify = () => {
    console.log('submitted verification request.')
    const {answer_id} = this.props.match.params;
    const request = {req_type: 'verify', content: [answer_id, `Please verify answer: ${answer_id}`]}
    RequestApiService.submitRequest(request)
      .then(res => {
        this.setState({verifySuccess: true})
      })
      .catch(this.setError)
  }

  renderAnswer() {
    const answer = this.state.answer
    const verifySuccess = this.state.verifySuccess
    if (!answer) {
      return null
    }
    return (
      <Section className='ViewAnswer'>
        <header>
          <h3>Your answer to code '<Link to={`/code/${answer.code_id}`}>{answer.code_id}</Link>':</h3>
          Date Submitted: <NiceDate date={answer.date_created} />
        </header>
        <Section>
          <p>Answer Given:</p>
          <blockquote>{answer.content}</blockquote>
          <p>Your answer is:</p>
          <h3>{answer.correct ? <>Correct. Congrats!</> : <>Wrong. Try Again?</>}</h3>
          <p className='verifyButton'><Input type='button'  value='Request Verification' onClick={this.verify}/></p>
          {verifySuccess ? <p>Verification request submitted</p> : null}
        </Section>
        <footer>
        ID <Hyph /> {answer.id}. Submitted by <Hyph /> {answer.user_name}.
        </footer>
      </Section>
    )
  }

  render() {
    const {error} = this.state;
    return (
      <Section className='AnswerPage'>
        {error ? <p className='red'>There was an error, please try again</p> : this.renderAnswer()}
      </Section>
    )
  }
}
