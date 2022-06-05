import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { Row, Table } from "react-bootstrap";

const SmallSizes = observer(() => {
  const {device} = useContext(Context);
  return (
    <Table striped bordered hover>
        <thead>
          <th>Размер, ширина/глубина</th>
      {device.smallSizes.map(size => 
          <th key={size.id}>{size.size}</th>
          )}
          </thead>
          <tbody>
            
          {device.smallSizes.map((size, index) => 
          <tr key={index}>
            <td>{size.name}</td>
            <td>{size.price}</td>
          </tr>
          )}
          </tbody>
</Table>
  )
});

export default SmallSizes;
