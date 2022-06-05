import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import EmailModal from './modals/EmailModal';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ФУНДАМЕНТ</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">
        <EmailModal/>
      </Nav.Link>
      <Nav.Link href="#features">Telegram</Nav.Link>
      <Nav.Link href="#pricing">+7 982 211-39-96</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar;
