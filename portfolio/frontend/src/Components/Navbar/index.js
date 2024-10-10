import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <h1 className="header">Portfolio</h1>
      <ul className="list-container">
        <li className="item-container">
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li className="item-container">
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </li>
        <li className="item-container">
          <NavLink to="/projects" activeClassName="active-link">
            Projects
          </NavLink>
        </li>
        <li className="item-container">
          <NavLink to="/skills" activeClassName="active-link">
            Skills
          </NavLink>
        </li>
        <li className="item-container">
          <NavLink to="/contact" activeClassName="active-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
