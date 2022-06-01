import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Materials from '../components/Materials';
import SizeBar from '../components/SizeBar';
import TypeBar from '../components/TypeBar';

const Shop = () => {
  return (
    <Container>
      <Row className={"mt-4"}>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <Materials/>
          <SizeBar />
        </Col>
      </Row>
    </Container>
  )
}

export default Shop;
