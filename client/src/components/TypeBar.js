import React, { useContext } from "react";
import { Context } from "..";
import { ListGroup } from "react-bootstrap";
import {observer} from 'mobx-react-lite'
import { Link } from "react-router-dom";

const TypeBar = observer(() => {
  const {device} = useContext(Context);

  return (
    <ListGroup>
      {device.types.map(type => 
        <ListGroup.Item 
        style={{cursor: 'pointer'}}
        key={type.id}
        // active={type.id === device.selectedType.id}
        // onClick={() => device.setSelectedType(type)}
        >
          <Link to={`/type/${type.id}`}>{type.name}</Link>
        </ListGroup.Item>)}
</ListGroup>
  )
});

export default TypeBar;
