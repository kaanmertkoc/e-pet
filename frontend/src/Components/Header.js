import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../Styles/Header.css';

const Header = () => {
  return (
    <div>
      <Navbar
        className="header"
        collapseOnSelect
        expand="lg"
        style={{ background: '#3C9FE7' }}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <h1 className="header-name">E-Pet</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
