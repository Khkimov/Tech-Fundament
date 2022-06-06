import React, { useContext } from "react";
import { Button, Form, Dropdown } from "react-bootstrap";
import { Context } from "..";


const Quiz = () => {
  const {device} = useContext(Context);
  return (
        <Form className={"mt-4 p-2"} 
        style={{border: '1px solid', borderRadius: '5px'}}
        >
          <div style={{fontWeight: 'bold'}}>
            Выберите и отправьте нам то что Вас интересует и мы свами свяжемся
            </div>
          <Form.Select className={"mt-2 mb-2"}>
              {device.types.map(type => 
                <option key={type.id}>{type.name}</option>
                )}
          </Form.Select>
          <Form.Select className={"mt-2 mb-2"}>
              {device.materials.map(material => 
                <option key={material.id}>{material.name}</option>
                )}
          </Form.Select>
          <Form.Select className={"mt-2 mb-2"}>
              {device.sizes.map(size => 
                <option key={size.id}>{size.name}</option>
                )}
          </Form.Select>
          <Form.Select className={"mt-2 mb-2"}>
              {device.sizes.map(size => 
                <option key={size.id}>{size.size}</option>
                )}
          </Form.Select>
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
          <Button className={"mt-2"} 
          variant="outline-dark"
          // style={{width: '290px'}}
          
          >
            Отправить
            </Button>
        </Form>
  )
};

export default Quiz;
