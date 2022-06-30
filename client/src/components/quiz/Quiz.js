import { useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import IMAGES from "../../assets";
import EmailModal from "./EmailModal";
import './Quiz.css';


const Quiz = () => {
  return (
  <Container className="quiz">
    <Row className="d-flex flex-column">
       <div className="steps">
      <ul className="nav nav-tabs tabs__items">
        {IMAGES.map((el, index) => (
          <div className="tabs__items" key={index}>
            <li className="nav-item">
              <a className="nav-link tabs__item" href={`#tab-${index}`}>{el.name}</a>
            </li>
          </div>
          ))}
        <div className="tabs__items" >
            <li className="nav-item">
              <a className="nav-link tabs__item" href="#tab-2">Шаг 3</a>
            </li>
          </div>
      </ul>

       </div>


      {IMAGES.map((el, index) => 
      <div className="tabs__block" id={`tab-${index}`}>
        {el.step.map((elem, ind) => (
          <Card key={ind} 
          style={{ width: '9rem', 
          margin: '10px',
          cursor: 'pointer',
          display: 'flex'
          }}
          >
            <Card.Img variant="top" src={elem.img} />
            <Card.Body>
              <Card.Title style={{fontSize: '15px'}}>{elem.type}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
      )}

    </Row>
    <div className="tabs__block block3" id="tab-2">
      <EmailModal
      />
    </div>
  </Container>
  )
};

export default Quiz;
