import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to={`${process.env.PUBLIC_URL}/`}>CryptoCurrent</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/`}>Prices</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/`}>Products</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/`}>Company</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/`}>Earn crypto</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/historic`}>Historic</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/login`}>Sign In</Link>
          </li>
          <li className="get-started">
            <Link to={`${process.env.PUBLIC_URL}/signup`}>Get Started</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
