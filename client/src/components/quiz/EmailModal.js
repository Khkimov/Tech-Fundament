import React, {useState, useRef} from "react";
import {Modal, Button, Form, FormText, Container} from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './Email.css'

function EmailModal() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fabaf7g', 'template_brebtxm', form.current, 'bQLwenvccnFw8Fqbm')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Container className="d-flex">
    <Form className="mailForm" ref={form} onSubmit={sendEmail}>
      <FormText>РАССЧИТАЕМ ВАШ ПРОЕКТ:</FormText>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="name" name="user_name" placeholder="Имя" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" name="user_email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control name="message" placeholder="Сообщение" as="textarea" rows={3} />
      </Form.Group>
      <Button type="submit" variant="outline-secondary">Отправить</Button>
    </Form>

    <div className="info">
      <div className="title-info">
        <h5>
      СТРОИМ НАДЕЖНО И КАЧЕСТВЕННО!
      </h5>
      </div>
      <div className="spec-info">
      Наши опытные специалисты помогут разобраться, посоветовать и рассчитать оптимальный фундамент для Вашего дома, бани, 
      забора и любого другого строения!
      </div>
      <div>
        <h6>
        Мы строим не только фундаменты, но и дома!
        </h6>
        <p>
        Имеем практический опыт в строительстве домов. В большинстве случаев продолжаем возведение клиенту коробки дома, 
        устройство крыши, фасадные и другие работы. Бесплатно проконсультируем Вас по многим сопутствующим вопросам, обращайтесь!
        </p>
      </div>
    </div>
    </Container>
  );
}

export default EmailModal;
