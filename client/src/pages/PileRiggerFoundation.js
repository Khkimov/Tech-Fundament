import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { Table } from "react-bootstrap";

const PileRiggerFoundation = observer(() => {
  const {device} = useContext(Context);
  const [names, setNames] = useState([])
  const [prices, setPrices] = useState([])

    useEffect(()=> {
     const allNames = Object.keys(device?.prices)
     const allPrices = Object.values(device?.prices)
     setNames(allNames)
     setPrices(allPrices)
    },[device.prices, device.types])


  return (
    <>
    <h2>
    ЦЕНА ФУНДАМЕНТА ДЛЯ ЗАБОРА
      </h2>
      {/* <Materials/> */}
      <p>
      Заливаем монолитные фундаменты для любых заборов в Тюмени и области, оставляйте заявку и мы выполним все необходимые расчеты! Работы выполняем под ключ (материал, работа, уборка мусора).
      </p>
    <Table striped bordered hover>
      <thead>
        <th>Ширина, высота</th>
        <th>Стоимость</th>
      </thead>
        <tbody>
          <tr>
          <td>Расчет</td> 
          <td>бесплатно</td> 
          </tr>
          <tr>
            <td>200мм/500мм</td>
          </tr>
          <tr>
            <td>250мм/500мм</td>
          </tr>
          <tr>
            <td>300мм/500мм</td>
          </tr>
          <tr>
            <td>400мм/500мм</td>
          </tr>
        </tbody>
</Table>
</>
  )
});

export default PileRiggerFoundation;
