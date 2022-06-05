import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "..";
import { login } from "../http/adminAPI";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";

const Auth = observer(() => {
  const {admin} = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const click = async () => {
    try {
      let data;
      if (isLogin) {
           data = await login(email, password);
      }
      admin.setAdmin(data)
      admin.setIsAuth(true)
      navigate(ADMIN_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }
  return (
    <Container
    className={"d-flex justify-content-center align-items-center"}
    style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className={"p-5"}>
        <h2 className={"m-auto"}>Авторизация</h2>
        <Form className={"d-flex flex-column"}>
          <Form.Control 
          className="mt-2"
          placeholder="Введите ваш email..."
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
          <Form.Control 
          className="mt-2"
          placeholder="Введите ваш пароль..."
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          />
          <Button 
          className="mt-3"
          variant={"outline-success"}
          onClick={click}
          >
            Войти
          </Button>
        </Form>
      </Card>
    </Container>
  )
});

export default Auth;
