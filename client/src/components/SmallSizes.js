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
          <th>300/500</th>
          <th>300/600</th>
          <th>300/1000</th>
          <th>300/1400</th>
          </thead>
          <tbody>
            
          {device.smallSizes.map((size, index) => 
          <tr key={index}>
            <td>{size.name}</td>
            <td>{size.price['300/500']}</td>
            <td>{size.price['300/600']}</td>
            <td>{size.price['300/1000']}</td>
            <td>{size.price['300/1400']}</td>
          </tr>
          )}
          </tbody>
</Table>
  )
});

export default SmallSizes;
