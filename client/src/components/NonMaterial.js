import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { Table } from "react-bootstrap";

const NonMaterial = observer(() => {
  const {device} = useContext(Context);
  return (
    <Table striped bordered hover>
        <thead>
          <th>Размер, ширина/глубина</th>
          <th>300/600</th>
          <th>300/800</th>
          <th>300/1400</th>
          <th>300/1800</th>
          </thead>
          <tbody>
            
          {device._nonMaterial.map((size, index) => 
          <tr key={index}>
            <td>{size.name}</td>
            <td>{size.price['300/600']}</td>
            <td>{size.price['300/800']}</td>
            <td>{size.price['300/1400']}</td>
            <td>{size.price['300/1800']}</td>
          </tr>
          )}
          </tbody>
</Table>
  )
});

export default NonMaterial;
