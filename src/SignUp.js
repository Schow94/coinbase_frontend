import React, { Component } from 'react';

import Navbar from './Navbar';
import './styles/Signup.css';

export default class SignUp extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="signup-container">
          <h3 className="signup-title">Create your account</h3>
          <form className="signup-form">
            <input
              className="first-name"
              type="text"
              placeholder="First name"
            />
            <input className="last-name" type="text" placeholder="Last name" />

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
              <p>
                I certify that I am 18 years of age or older, and agree to the
                User Agreement and Privacy Policy
              </p>
            </div>
            <button className="create-account-btn">Create account</button>
            <p>Sign In to your CryptoCurrent account or</p>
            <p>Sign up as a business</p>
          </form>
        </div>
      </>
    );
  }
}
