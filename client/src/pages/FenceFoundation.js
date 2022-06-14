import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { Table } from "react-bootstrap";

const FenceFoundation = observer(() => {
  const [names, setNames] = useState([])
    const [prices, setPrices] = useState([])
    const {device} = useContext(Context);

    useEffect(()=> {
     const allNames = Object.keys(device?.prices)
     const allPrices = Object.values(device?.prices)
     setNames(allNames)
     setPrices(allPrices)
    },[device.prices])

    return (
      <>
      <h2>
      СТОИМОСТЬ МЕЛКОЗАГЛУБЛЕННОГО ЛЕНТОЧНОГО ФУНДАМЕНТА
      </h2>
      {/* <Materials/> */}
      <p>
      Цена фундамента МЗФЛ при условии покупки, доставки материала и земляных работах силами заказчика, Вы оплачиваете только услугу по возведению фундамента.
      </p>
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
              if (price.typeId === 2) {
                return <td>{price.price}</td>
              }
            }) }
            </tr>
            )} 
          </tbody>
  </Table>
  </>
    )
});

export default FenceFoundation;
