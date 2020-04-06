import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/historic`}>Historic</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
