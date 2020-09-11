import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Section, Button} from '../../components/Utils/Utils';
import './HomePage.css';

export default class HomePage extends Component {


  render() {
    return (
      <div>
        <Section className='main-img'>
          <img src="http://via.placeholder.com/300" alt="The Codes Homepage Placeholder"/>
        </Section>
        <Section>
          <hr/>{/* TODO Add login and register buttons that only appear if a user is not logged in. */}
        </Section>
        <Section className="welcome">
          <h3>Welcome to The Codes</h3>
          <p>
            Solve codes, win prizes, prove just how vast your
            knowledge is in cracking codes and ciphers.
          </p>
        </Section>
      </div>
    )
  }
}