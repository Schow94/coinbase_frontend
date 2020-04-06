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
          <div className="brief-section">
            <div className="brief-container">
              <h4>In Brief</h4>
              <p>
                Founded in April of 2020, CryptoCurrent is a digital currency
                wallet and platform where merchants and consumers can transact
                with new digital currencies like bitcoin, ethereum, and
                litecoin. We're based in San Francisco, California. Bitcoin is
                the world's most widely used alternative currency with a total
                market cap of over $100 billion. The bitcoin network is made up
                of thousands of computers run by individuals all over the world.
              </p>
            </div>
            <div className="stats-container">
              <h4>Stats</h4>
              <div className="stat">
                <h2>30M+</h2>
                <p>Users</p>
              </div>
              <div className="stat">
                <h2>$150B+</h2>
                <p>Traded</p>
              </div>
            </div>
          </div>
          {/* <hr /> */}
        </div>
      </>
    );
  }
}
