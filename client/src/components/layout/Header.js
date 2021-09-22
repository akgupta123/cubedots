import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="">
        <Nav.Link href="/" activeClassName="isactive">
          Home
        </Nav.Link>
        <Nav.Link href="/building" activeClassName="isactive">
          Building
        </Nav.Link>
        <Nav.Link href="/location" activeClassName="isactive">
          Location
        </Nav.Link>
        <Nav.Link href="/gallery" activeClassName="isactive">
          Gallery
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
