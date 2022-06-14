import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Form, Dropdown } from "react-bootstrap";
import { Context } from "..";


const Quiz = observer(() => {
  const {device} = useContext(Context);
  return (
        <Form className={"mt-4 p-2"} 
        style={{border: '1px solid', borderRadius: '5px'}}
        >
          <Dropdown className={"mt-2 mb-2"}>
            <Dropdown.Toggle variant="outline-dark">
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
            <Dropdown.Toggle variant="outline-dark">
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
            <Dropdown.Toggle variant="outline-dark">
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
            <Dropdown.Toggle variant="outline-dark">
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
          <Button className={"mt-2"} 
          variant="outline-dark"
          style={{width: '100%'}}
          >
            Отправить
            </Button>
        </Form>
  )
});

export default Quiz;
