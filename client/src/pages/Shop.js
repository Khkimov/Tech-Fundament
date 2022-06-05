import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carusel from '../components/Carusel';
import Materials from '../components/Materials';
import Quiz from '../components/Quiz';
import SizeBar from '../components/SizeBar';
import TypeBar from '../components/TypeBar';

const Shop = () => {
  return (
    <Container>
      <Row className={"mt-4"}>
        <Col md={3}>
          <TypeBar />
          <Quiz/>
        </Col>
        <Col md={9}>
          <Materials/>
          <SizeBar />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          {/* <Carusel /> */}
        </Col>
      </Row>
    </Container>
  )
}

export default Shop;
