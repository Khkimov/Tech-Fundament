import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { Table } from "react-bootstrap";

const PriceWithMaterial = observer(() => {
  const {device} = useContext(Context);
  return (
    <Table striped bordered hover>
        <thead>
          <th>Размер, ширина/глубина</th>
      {device.sizes.map(size => 
          <th key={size.id}>{size.size}</th>
          )}
          </thead>
          <tbody>
            
          {device.sizes.map((size, index) => 
          <tr key={index}>
            <td>{size.name}</td>
            <td>{size.price}</td>
          </tr>
          )}
          </tbody>
</Table>
  )
});

export default PriceWithMaterial;
