import React, {Component} from 'react';
import AdminApiService from '../../services/admin-api-service';
import {Section} from '../../components/Utils/Utils';
import AnswerListItem from '../../components/AnswerListItem/AnswerListItem';
import './AnswerListPage.css'

export default class AnswerListPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  state = {
    answerList: [],
    error: null
  };

  setError = error => {
    this.setState({error});
  };

  clearError = () => {
    this.setState({error: null});
  };

  setAnswerList = answerList => {
    this.setState({answerList});
  };

  componentDidMount() {
    this.clearError();
    AdminApiService.getAnswers()
      .then(res => this.setAnswerList(res))
      .catch(this.setError);
  };

  renderAnswers() {
    const answerList = this.state.answerList;
    return answerList.map(answer =>
      <AnswerListItem
        key={answer.id}
        answer={answer}
      />
    );
  };

  render() {
    const {error} = this.state;
    return (
      <>
        <h2 className='answerlistpagetitle'>Answer List:</h2>
        <Section list className='AnswerListPage'>
          
          {error ? <p className='red'>There was an error, please try again</p> : this.renderAnswers()}
        </Section>
      </>
    );
  };
};