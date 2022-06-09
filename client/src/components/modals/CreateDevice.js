import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { Context } from "../..";
import { fetchTypes, fetchMaterials, fetchHouses, fetchSizes, fetchPrices } from "../../http/deviceAPI";

const CreateDevice = observer(({show, onHide}) => {
  const {device} = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchMaterials().then(data => device.setMaterials(data))
    fetchHouses().then(data => device.setHouses(data))
    fetchSizes().then(data => device.setSizes(data))
    fetchPrices().then(data => device.setPrices(data))
  }, [])
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
            <Dropdown.Toggle>
              {device.selectedType.name || "Выберите тип"}
              </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type => 
                <Dropdown.Item 
                onClick={() => device.setSelectedType(type)} 
                key={type.id}>{type.name}
                </Dropdown.Item>
                )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className={"mt-2 mb-2"}>
            <Dropdown.Toggle>
              {device.selectedMaterial.name || "Под ключ или без материала"}
              </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.materials.map(material => 
                <Dropdown.Item 
                onClick={() => device.setSelectedMaterial(material)} 
                key={material.id}>
                  {material.name}
                </Dropdown.Item>
                )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className={"mt-2 mb-2"}>
            <Dropdown.Toggle>
              {device.selectedHouse.name || "Выберите размер дома"}
              </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.houses.map(house => 
                <Dropdown.Item 
                onClick={() => device.setSelectedHouse(house)}
                key={house.id}>
                  {house.name}
                  </Dropdown.Item>
                )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className={"mt-2 mb-2"}>
            <Dropdown.Toggle>
              {device.selectedSize.name || "Выберите размер фундамента"}
              </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.sizes.map(size => 
                <Dropdown.Item 
                onClick={() => device.setSelectedSize(size)} 
                key={size.id}>
                  {size.name}
                  </Dropdown.Item>
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
      <Modal.Footer className={"justify-content-around"}>
        <Button variant="outline-danger" onClick={onHide}>Удалить</Button>
        <Button variant="outline-warning" onClick={onHide}>Изменить</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
});

export default CreateDevice;
