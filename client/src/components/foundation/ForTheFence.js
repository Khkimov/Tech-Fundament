import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { Table } from "react-bootstrap";

const PriceWithMaterial = observer(() => {
  const {device} = useContext(Context);
  return (
    <Table striped bordered hover>
        <thead>
          <th>Ширина, высота</th>
          <th>Стоимость</th>
          </thead>
          <tbody>
            
          {device.sizes.map((size, index) => 
          <tr key={index}>
            <td>{size.name}</td>
            <td>{size.price['400/600']}</td>
            <td>{size.price['400/1200']}</td>
            <td>{size.price['400/1400']}</td>
            <td>{size.price['400/1600']}</td>
          </tr>
          )}
          </tbody>
</Table>
  )
});

export default PriceWithMaterial;
