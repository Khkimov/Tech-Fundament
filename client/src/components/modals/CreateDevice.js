import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { Context } from "../..";
import { fetchTypes, fetchMaterials, fetchHouses, fetchSizes, fetchPrices, createPrice, editPrice } from "../../http/deviceAPI";

const CreateDevice = observer(({show, onHide}) => {
  const {device} = useContext(Context);
  const [name, setName] = useState('');
  const [material, setMaterial] = useState(null);
  const [type, setType] = useState(null);
  const [size, setSize] = useState(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchMaterials().then(data => device.setMaterials(data))
    fetchHouses().then(data => device.setHouses(data))
    fetchSizes().then(data => device.setSizes(data))
    fetchPrices().then(data => device.setPrices(data))
  }, [])

  const addDevice = () => {
    const newJson = {
      price,
      typeId: device.selectedType.id,
      materialId: device.selectedMaterial.id,
      houseId: device.selectedHouse.id,
      sizeId: device.selectedSize.id
    }
    createPrice(newJson).then(data => onHide())
  }

  const addNewPrice = () => {
    const newPrice = {
      price,
      typeId: device.selectedType.id,
      materialId: device.selectedMaterial.id,
      houseId: device.selectedHouse.id,
      sizeId: device.selectedSize.id
    }
    editPrice(newPrice).then(data => onHide())
  }
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
                key={type.id}>
                  {type.name}
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
          value={price}
          onChange={e => setPrice(e.target.value)}
          className={"mt-3"}
          placeholder="Введите цену"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer className={"justify-content-around"}>
        <Button variant="outline-danger" onClick={onHide}>Удалить</Button>
        <Button variant="outline-warning" onClick={addNewPrice}>Изменить</Button>
        <Button variant="outline-success" onClick={addDevice}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
});

export default CreateDevice;
