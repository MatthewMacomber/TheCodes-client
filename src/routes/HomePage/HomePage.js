import React, {Component} from 'react';
import textImage from 'text-to-image';
import {Section} from '../../components/Utils/Utils';
import './HomePage.css';

export default class HomePage extends Component {
  state = {
    homeImage: '',
    homeAltImage: '',
  };

  setHomeImage = homeImage => {
    this.setState({homeImage});
  };

  setHomeAltImage = homeAltImage => {
    this.setState({homeAltImage});
  };
  
  componentDidMount() {
    const homeText = 'jibyr mmuwo cxtvg kozre pdizu hrgre dmyhx fvrfm ffdov yrcgx ymqlp dsxys vsjsb sbzbl wkklx';
    textImage.generate(homeText, {
      fontSize: 50,
      lineHeight: 55,
      textAlign: 'center',
      bgColor: '#00000020',
      textColor: '#8D021F'
    })
      .then(this.setHomeImage);
    
    const homeAltText = 'Solve codes, win prizes, prove just how vast your knowledge is in cracking codes and ciphers.'
    textImage.generate(homeAltText, {
      fontSize: 50,
      lineHeight: 55,
      textAlign: 'center',
      bgColor: '#00000020',
      textColor: '#8D021F'
    })
      .then(this.setHomeAltImage)
  };

  onMouseOver = e => {
    e.target.src = this.state.homeAltImage;
  };

  onMouseOut = e => {
    e.target.src = this.state.homeImage;
  };

  render() {
    let homeImage = this.state.homeImage;
    return (
      <div>
        <Section className='main-img'>
          <img
            className='home-image'
            src={homeImage}
            onMouseOver={this.onMouseOver}
            onMouseOut={this.onMouseOut}
            alt="Homepage example code: jibyr mmuwo cxtvg kozre pdizu hrgre dmyhx fvrfm ffdov yrcgx ymqlp dsxys vsjsb sbzbl wkklx"
          />
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
