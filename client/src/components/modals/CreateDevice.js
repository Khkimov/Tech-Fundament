import React, { useContext } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { Context } from "../..";

const CreateDevice = ({show, onHide}) => {
  const {device} = useContext(Context);
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Изменить, добавить...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className={"mt-2 mb-2"}>
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type => 
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className={"mt-2 mb-2"}>
            <Dropdown.Toggle>Под ключ или без материала</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.materials.map(material => 
                <Dropdown.Item key={material.id}>{material.name}</Dropdown.Item>
                )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className={"mt-2 mb-2"}>
            <Dropdown.Toggle>Выберите размер дома</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.sizes.map(size => 
                <Dropdown.Item key={size.id}>{size.name}</Dropdown.Item>
                )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className={"mt-2 mb-2"}>
            <Dropdown.Toggle>Выберите размер фундамента</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.sizes.map(size => 
                <Dropdown.Item key={size.id}>{size.size}</Dropdown.Item>
                )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
          className={"mt-3"}
          placeholder="Введите размер дома, типа(Дом 8 на 8)"
          />
          <Form.Control
          className={"mt-3"}
          placeholder="Введите размер фундамента, типа(400/600)"
          />
          <Form.Control
          className={"mt-3"}
          placeholder="Введите цену"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Изменить</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default CreateDevice;
