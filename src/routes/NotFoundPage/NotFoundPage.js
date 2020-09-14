import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
// TODO Add css for NotFoundPage.

export default class NotFoundPage extends Component {
  render() {
    return (
      <Section className='NotFoundPage'>
        <h2>404 - Page not found</h2>
        <p>Please try going back to the previous page.</p>
      </Section>
    );
  };
};