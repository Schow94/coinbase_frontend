import React, { Component } from 'react';

import Navbar from './Navbar';
import './styles/Login.css';

export default class SignUp extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="signin-container">
          <h3 className="signin-title">Sign in to Cryptocurrent</h3>
          <form className="signin-form">
            <input className="email" type="text" placeholder="Email" />

            <input
              className="password"
              type="text"
              placeholder="Choose password"
            />
            <div className="checkbox-container">
              <input
                className="checkbox"
                type="checkbox"
                id="18-certify"
                name="18-certify"
              />
              <p>Keep me signed in on this computer</p>
            </div>
            <button className="signin-btn">Sign In</button>
          </form>
          <div className="bottom-div">
            <p>Forgot password? Don't have an account? Privacy Policy</p>
            <p>Have an issue with 2-factor authentication?</p>
          </div>
        </div>
      </>
    );
  }
}
