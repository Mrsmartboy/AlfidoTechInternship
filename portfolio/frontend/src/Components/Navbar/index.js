import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // To toggle the menu on small screens

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-container">
      <h1 className="header">Portfolio</h1>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      
      <ul className={`list-container ${menuOpen ? 'active' : ''}`}>
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
