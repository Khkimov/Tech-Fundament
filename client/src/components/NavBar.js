import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import EmailModal from './modals/EmailModal';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <NavLink style={{color:'white', textDecoration: 'none'}} 
      to={SHOP_ROUTE}
      >
        ФУНДАМЕНТ
      </NavLink>
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
