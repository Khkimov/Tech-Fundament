import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/adminAPI";
import {Row, Spinner, Col, Container} from "react-bootstrap";
import TypeBar from './components/TypeBar';
import Quiz from './components/Quiz';


// axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// console.log(axios.defaults.baseURL);

const App = observer(() => {
  const {admin} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      check().then(data => {
          admin.setAdmin(true)
          admin.setIsAuth(true)
      }).finally(() => setLoading(false))
  }, [])

  if (loading) {
      return <Spinner animation={"grow"}/>
  }

  return (
      <BrowserRouter>
          <NavBar />
          <Container>
          <Row>
          <Col md={3}>
          <TypeBar />
          <Quiz/>
        </Col>
        <Col md={9}>
          <AppRouter />
        </Col>
          </Row>
          </Container>
      </BrowserRouter>
  );
});

export default App;
