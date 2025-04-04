import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/user/1">User Profile 1</Link></li>
        <li><Link to="/user/2">User Profile 2</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
