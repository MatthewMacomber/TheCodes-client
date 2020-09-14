import React, {Component} from 'react';
import {Button, Input, Required} from '../Utils/Utils';
import CodeApiService from '../../services/code-api-service';
import './CreateCodeForm.css'

export default class CreateCodeForm extends Component {
  static defaultProps = {
    onCodeCreateSuccess: () => {}
  };

  state = {error: null};

  handleSubmit = ev => {
    ev.preventDefault();
    const  {code_name, the_code, the_answer} = ev.target;
    
    this.setState({error: null});
    CodeApiService.postCode({
      code_name: code_name.value,
      the_code: the_code.value,
      the_answer: the_answer.value
    })
      .then(code => {
        code_name.value = '';
        the_code.value = '';
        the_answer.value = '';
        this.props.onCodeCreateSuccess(code);
      });
  };

  clearForm = () => {
    document.getElementById('create-code-form').reset();
  };

  render() {
    const {error} = this.state;
    return (
      <form className='CreateCodeForm' onSubmit={this.handleSubmit} id='create-code-form'>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='code_name'>
          <label htmlFor='CreateCodeForm__code_name'>
            Name <Required />
          </label>
          <Input
            name='code_name'
            type='text'
            required
            placeholder='Super Code'
            id='CreateCodeForm__code_name'
          />
        </div>
        <div className='the_code'>
          <label htmlFor='CreateCodeForm__the_code'>
            Code <Required />
          </label>
          <textarea
            name='the_code'
            required
            placeholder='Uryyb Jbeyq!'
            id='CreateCodeForm__the_code'
          />
        </div>
        <div className='the_answer'>
          <label htmlFor='CreateCodeForm__the_answer'>
            Answer <Required />
          </label>
          <textarea
            name='the_answer'
            type='textarea'
            required
            placeholder='Hello World!'
            id='CreateCodeForm__the_answer'
          />
        </div>
        <div className='CreateCodeFormButtons'>
          <Button onClick={this.clearForm}>Clear</Button>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    );
  };
};