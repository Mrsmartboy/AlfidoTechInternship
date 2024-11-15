import React from 'react';
import {
    Navbar,
    NavItem,
    NavLink,
    Nav
} from 'reactstrap';

const Footer = () => {
    return (
        <Navbar color="dark" dark expand="sm" className="justify-content-center">
            <Nav navbar className="mx-auto">
                <NavItem>
                    <NavLink href="/" className='text-center'>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/about" className='text-center'>About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/login" className='text-center'>Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/signup" className='text-center'>Signup</NavLink>
                </NavItem>
            </Nav>
         
            <div className="text-center w-100 p-2 ms-auto" expand='sm' style={{ color: "white" }}>
                <p className="mb-0">@2024 JosephBlogs</p>
            </div>
        </Navbar>
    );
}

export default Footer;
