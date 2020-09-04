import React, {Component} from 'react';
import {Button, Input, Required} from '../Utils/Utils';
import TokenService from '../../services/token-service';
import CodeApiService from '../../services/code-api-service';

export default class CreateCodeForm extends Component {
  static defaultProps = {
    onCodeCreateSuccess: () => {}
  }

  state = {error: null};

  handleSubmit = ev => {
    //Submit code via CodeApi
    ev.preventDefault();
    const  {code_name, the_code, the_answer} = ev.target;
    console.log(`${code_name} : ${the_code} : ${the_answer}`)
    this.setState({error: null})
    //Check for valid user auth token first via TokenService.
    //Post code to server via CodeApiService.
  }

  clearForm = () => {
    document.getElementById('create-code-form').reset();
  }

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
        <Button onClick={this.clearForm}>Clear</Button>
        <Button type='submit'>Submit</Button>
      </form>
    )
  }
}