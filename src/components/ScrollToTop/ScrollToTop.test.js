import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

describe('ScrollToTop component', () => {
  it('renders the ScrollToTop without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ScrollToTop />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
});