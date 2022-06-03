import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { Row, Table } from "react-bootstrap";

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

  
    {/* <tr>
      <td>2</td>
      {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>3</td>
      {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr> */}
  {/* </tbody> */}
</Table>
  //   <div>
  //   {device.sizes.map(device => 
      
  //     <Table striped bordered hover
  //   key={device.id}
  //   >
  //     <thead>
  //   <tr>
  //     <th>
  //       Размер, ширина/глубина
  //    </th>
  //    {device.sizes.map(device =>
  //     <th>{device.size}</th>
  //     )}
  //   </tr>
  // </thead>
  // <tbody>
  //   <tr>
  //     <td>
  //     {device.name}
  //     </td>
  //     <td>360 000 руб.</td>
  //     <td>510 000 руб.</td>
  //     <td>570 000 руб.</td>
  //     <td>600 000 руб.</td>
  //   </tr>
  //   <tr>
  //     <td>
  //     {device.name}
  //     </td>
  //     <td>405 000 руб.</td>
  //     <td>555 000 руб.</td>
  //     <td>615 000 руб.</td>
  //     <td>645 000 руб.</td>
  //   </tr>
  //   <tr>
  //     <td>
  //     {device.name}
  //     </td>
  //     <td>435 000 руб.</td>
  //     <td>570 000 руб.</td>
  //     <td>630 000 руб.</td>
  //     <td>660 000 руб.</td>
  //   </tr>
  //   <tr>
  //     <td>
  //     {device.name}
  //     </td>
  //     <td>435 000 руб.</td>
  //     <td>600 000 руб.</td>
  //     <td>675 000 руб.</td>
  //     <td>705 000 руб.</td>
  //   </tr>
  //   <tr>
  //     <td>
  //     {device.name}
  //     </td>
  //     <td>465 000 руб.</td>
  //     <td>615 000 руб.</td>
  //     <td>690 000 руб.</td>
  //     <td>720 000 руб.</td>
  //   </tr>
  // </tbody>
  //   </Table>
  //   )}
  //   </div>
  )
});

export default PriceWithMaterial;
