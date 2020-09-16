import React, {Component} from 'react';
import {Hyph} from '../Utils/Utils';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <>
        <p className="Footer">
          The Codes <Hyph /> Copyright 2020 Matthew Macomber
        </p>
        <ScrollToTop />
      </>
    );
  };
};