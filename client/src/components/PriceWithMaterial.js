  import React, { useContext, useEffect, useState } from "react";
  import { observer } from "mobx-react-lite";
  import { Context } from "..";
  import { Table } from "react-bootstrap";

  const PriceWithMaterial = observer(() => {
    const [names, setNames] = useState([])
    const [prices, setPrices] = useState([])
    const {device} = useContext(Context);
    console.log(device);
    useEffect(()=> {
  const allNames = Object.keys(device?.prices)
  console.log(Object.values(device?.prices));
  const allPrices = Object.values(device?.prices)
  setNames(allNames)
  setPrices(allPrices)

    },[device.prices])
    return (
      <Table striped bordered hover>
          <thead>
          <th>Размер, ширина/глубина</th>
            {device.sizes.map((size, index) => 
            <th key={index}>{size.name}</th>
            )}
            </thead>
            <tbody>
            {prices.map((el, index) => 
            <tr key={index}> 
            {names[index]}
            { el.map(price => {
              if (price.materialId === 1) {
                return <td>{price.price}</td>
              }
            }) }
            </tr>
            )} 
            </tbody>
  </Table>
    )
  });

  export default PriceWithMaterial;
