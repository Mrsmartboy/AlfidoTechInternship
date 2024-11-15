import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import './index.css'

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

      <Navbar color='dark' dark expand="sm" className='fixed-top' >
        <NavbarBrand href="/">My Blogs</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/" className='nav-item'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" className='nav-item'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login" className='nav-item'>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup" className='nav-item'>Signup</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  
  );
}

export default CustomNavbar;
