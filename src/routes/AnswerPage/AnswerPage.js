import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AnswerApiService from '../../services/answer-api-service';
import {NiceDate, Hyph, Section, Input} from '../../components/Utils/Utils';

export default class AnswerPage extends Component {
  static defaultProps = {
    match: {params: {}}
  }

  state = {
    answer: null,
    error: null
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

  verify() {
    // TODO Handle submission of a answer verification request.
    console.log('submitted verification request.')
    return null
  }

  renderAnswer() {
    const answer = this.state.answer
    if (!answer) {
      return null
    }
    return (
      <>
        <header>
          <h3>Your answer to code '<Link to={`/code/${answer.code_id}`}>{answer.code_id}</Link>':</h3>
          Date Submitted: <NiceDate date={answer.date_created} />
        </header>
        <Section>
          <p>Answer Given:</p>
          <p>{answer.content}</p>
          <p>You Are:</p>
          <p>{answer.correct ? <>Correct. Congrats!</> : <>Wrong. Try Again?</>}</p>
          <Input type='button' value='Request Verification' onClick={this.verify}/>
        </Section>
        <footer>
        ID <Hyph /> {answer.id}. Submitted by <Hyph /> {answer.user_name}.
        </footer>
      </>
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
