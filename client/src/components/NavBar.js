import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '..';
import { SHOP_ROUTE } from '../utils/consts';
import EmailModal from './modals/EmailModal';

const NavBar = observer(() => {
  const {admin} = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    admin.setAdmin({})
    admin.setIsAuth(false)
  }

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
        {/* <EmailModal/> */}
      </Nav.Link>
      <Nav.Link href="#features">Telegram</Nav.Link>
      <Nav.Link href="#pricing">+7 982 211-39-96</Nav.Link>
      {admin.isAuth
      ?
      <Button
      variant={"outline-light"}
      onClick={() => logOut()}
      className="ml-2"
      >
        Выйти
      </Button>
      :
      ''
      }
    </Nav>
    </Container>
  </Navbar>
  )
});

export default NavBar;
