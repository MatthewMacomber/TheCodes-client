import React, {Component} from 'react';
import AnswerApiService from '../../services/answer-api-service';
import {NiceDate, Hyph, Section} from '../../components/Utils/Utils';

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

  renderAnswer() {
    const answer = this.state.answer
    if (!answer) {
      return null
    }
    // TODO Add actual checking of answer and displaying of code.
    return (
      <>
        <header>
          <h3>Your answer:</h3>
          Date Submitted: <NiceDate date={answer.date_created} />
        </header>
        <Section>
          <p>Answer:</p>
          <p>{answer.content}</p>
          <p>Correct/Wrong</p>
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
