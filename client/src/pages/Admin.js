import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  return (
    <Container className={"d-flex flex-column"}>
      <Button 
      variant="outline-dark" 
      className={"mt-4 p-3"}
      onClick={() => setTypeVisible(true)}
      >
        Добавить тип фундамента
      </Button>
      <Button 
      variant="outline-dark" 
      className={"mt-4 p-3"}
      onClick={() => setDeviceVisible(true)}
      >
        Добавить размер, цену
      </Button>
      {/* <Button 
      variant="outline-dark" 
      className={"mt-4 p-3"}
      onClick={() =>}
      >
        Добавить вид дома
      </Button> */}
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
    </Container>
  )
};

export default Admin;
