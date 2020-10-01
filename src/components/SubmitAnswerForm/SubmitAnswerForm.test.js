import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SubmitAnswerForm from './SubmitAnswerForm';

describe('SubmitAnswerForm component', () => {
  it('renders the SubmitAnswerForm without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <SubmitAnswerForm />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
});