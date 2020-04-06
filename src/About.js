import React, { Component } from 'react';
import Navbar from './Navbar';
import './styles/About.css';

export default class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div class="about-container">
          <div className="image-container">
            <h1 className="about-title">About CryptoCurrent</h1>
          </div>
          <ul className="about-list">
            <li>About</li>
            <li>Careers</li>
            <li>Mission</li>
            <li>Press</li>
          </ul>
          <hr className="line" />
        </div>
      </>
    );
  }
}
