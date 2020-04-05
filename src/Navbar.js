import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav-container">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">News</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    );
  }
}
