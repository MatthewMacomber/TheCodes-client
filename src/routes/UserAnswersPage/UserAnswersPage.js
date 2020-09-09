import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import AnswerListItem from '../../components/AnswerListItem/AnswerListItem';
import AnswerApiService from '../../services/answer-api-service';

export default class UserAnswersPage extends Component {
  static defaultProps = {
    match: {params: {}}
  }

  state = {
    answerList: [],
    error: null
  }
  
  setError = error => {
    console.log(error)
    this.setState({error})
  }

  clearError = () => {
    this.setState({error: null})
  }

  setAnswerList= answerList => {
    this.setState({answerList})
  }

  componentDidMount() {
    this.clearError();
    //answer service get answers
    AnswerApiService.getUserAnswers()
      .then(res => this.setAnswerList(res))
      .catch(this.setError)
  }

  renderAnswers() {
    const answerList = this.state.answerList;
    if (answerList.length === 0) {
      return (
        <h3>You have no answers yet. Go solve some codes!</h3>
      )
    } else {
      console.log(answerList)
      return answerList.map(answer =>
        <AnswerListItem
          key={answer.id}
          answer={answer}
        />
      )
    }
  }

  render() {
    const {error} = this.state;
    return (
      <Section list className=''>
        <h2>My Answers</h2>
        {error ? <p className='red'>There was an error, please try agin</p> : this.renderAnswers()}
      </Section>
    )
  }
};
