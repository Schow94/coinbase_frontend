import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/historic">Historic</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
