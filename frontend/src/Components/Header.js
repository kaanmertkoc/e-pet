import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../Styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <Navbar sticky="top" style={{ background: '#3C9FE7' }}>
        <Navbar.Brand href="/" style={{ textDecoration: 'none' }}>
          <h1 className="header-name">E-Pet</h1>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;
