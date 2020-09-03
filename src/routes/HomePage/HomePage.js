import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {NiceDate, Hpyh, Section, Button} from '../../components/Utils/Utils';
import './HomePage.css';

export default class HomePage extends Component {


  render() {
    return (
      <div>
        <Section>
          <img src="http://via.placeholder.com/300" alt="The Codes Homepage"/>
        </Section>
        <Section>
          <Button>Register</Button><Button>Login</Button>
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