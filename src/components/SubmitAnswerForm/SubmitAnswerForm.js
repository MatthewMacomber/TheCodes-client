import React, {Component} from 'react';
import {Button, Required} from '../Utils/Utils';
import AnswerApiService from '../../services/answer-api-service';
import './SubmitAnswerForm.css';

export default class SubmitAnswerForm extends Component {
  static defaultProps = {
    onSubmitAnswerSuccess: () => {}
  }

  state = {error: null};

  handleSubmit = ev => {
    ev.preventDefault();
    const  {the_answer} = ev.target;
    console.log(`${the_answer}`)
    
    this.setState({error: null})
    AnswerApiService.submitAnswer({
      the_answer: the_answer.value,
      code_id: this.props.code_id
    })
    .then(answer => {
      the_answer.value = '';
      this.props.onSubmitAnswerSuccess(answer);
    })
  }

  clearForm = () => {
    document.getElementById('submit-answer-form').reset();
  }

  render() {
    const {error} = this.state;
    return (
      <form className='SubmitAnswerForm' onSubmit={this.handleSubmit} id='submit-answer-form'>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='the_answer'>
          <label htmlFor='SubmitAnswerForm__the_answer'>
            Answer <Required />
          </label>
          <textarea
            name='the_answer'
            type='textarea'
            required
            placeholder='Hello World!'
            id='SubmitAnswerForm__the_answer'
          />
        </div>
        <Button onClick={this.clearForm}>Clear</Button>
        <Button type='submit'>Submit</Button>
      </form>
    )
  }
}