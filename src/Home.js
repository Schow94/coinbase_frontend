import React, { Component } from 'react';
import Navbar from './Navbar';
import './styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="home-container">
          <h1 className="home-title">Buy and sell cryptocurrency</h1>
          <p className="home-desc">
            CryptoCurrent is the easiest place to buy, sell, and manage your
            cryptocurrency portfolio
          </p>
          <form className="get-started-form">
            <input
              className="get-started-input"
              type="text"
              placeholder="Email address"
            ></input>
            <button className="get-started-btn-green">Get Started</button>
          </form>
        </div>
      </>
    );
  }
}
