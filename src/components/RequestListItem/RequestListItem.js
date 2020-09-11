import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {NiceDate, Hyph, Section} from '../Utils/Utils';

export default class RequestListItem extends Component {
  render() { 
    const {request} = this.props;
    // TODO Add a completed/delete request button.
    return (
      <Section className='RequestListItem'>
        <header>
          <h2>Request From User ID: {request.user_id}</h2>
          <NiceDate date={request.date_created} />
        </header>
        <div>
          <h3>Request Type: {request.req_type}</h3>
          <p>Request: <Link to={`/answers/${request.content[0]}`}>{request.content[1]}</Link></p>
        </div>
        <footer>
          Request ID <Hyph /> {request.id}
        </footer>
      </Section>
    )
  }
}
