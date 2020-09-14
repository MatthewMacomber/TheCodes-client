import React, {Component} from 'react';
import textImage from 'text-to-image';
import {Section} from '../../components/Utils/Utils';
import './HomePage.css';

export default class HomePage extends Component {
  state = {
    homeImage: ''
  };

  setHomeImage = homeImage => {
    this.setState({homeImage})
  }
  
  componentDidMount() {
    const homeText = 'jibyr mmuwo cxtvg kozre pdizu hrgre dmyhx fvrfm ffdov yrcgx ymqlp dsxys vsjsb sbzbl wkklx';
    textImage.generate(homeText, {
      fontSize: 50,
      lineHeight: 55,
      textAlign: 'center',
      bgColor: '#000000AA',
      textColor: 'red'
    })
      .then(this.setHomeImage);
  };

  render() {
    let homeImage = this.state.homeImage;
    return (
      <div>
        <Section className='main-img'>
          <img src={homeImage} alt="Homepage example code using engima machine: jibyr mmuwo cxtvg kozre pdizu hrgre dmyhx fvrfm ffdov yrcgx ymqlp dsxys vsjsb sbzbl wkklx"/>
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
    );
  };
};