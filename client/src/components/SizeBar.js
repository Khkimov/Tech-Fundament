import React, { useContext } from "react";
// import { observer } from "mobx-react-lite";
// import { Context } from "..";
import { Row, Table } from "react-bootstrap";
import PriceWithMaterial from "./PriceWithMaterial";

const SizeBar = () => {
  return (
    <Row>
      <h1>
      СТОИМОСТЬ ЛЕНТОЧНОГО ФУНДАМЕНТА
      </h1>
      <p>
      Расчет типовых популярных размеров ленточного фундамента. Цена, ориентировочная, под ключ в Москве и Московской области, включает в себя: материалы (арматура, бетон, песок, щебень, опалубка, крепежный материал и др.), доставка, работы по устройству фундамента (земляные работы), уборка мусора.
      </p>
      <PriceWithMaterial/>
    {/* <Table striped bordered hover>
  <thead>
    <tr>
      <th>
        Размер, ширина/глубина
     </th>
      <th>400мм/600мм</th>
      <th>400мм/1200мм</th>
      <th>400мм/1400мм</th>
      <th>400мм/1600мм</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
      Дом 8 на 8
      </td>
      <td>360 000 руб.</td>
      <td>510 000 руб.</td>
      <td>570 000 руб.</td>
      <td>600 000 руб.</td>
    </tr>
    <tr>
      <td>
      Дом 9 на 9
      </td>
      <td>405 000 руб.</td>
      <td>555 000 руб.</td>
      <td>615 000 руб.</td>
      <td>645 000 руб.</td>
    </tr>
    <tr>
      <td>
      Дом 9 на 10
      </td>
      <td>435 000 руб.</td>
      <td>570 000 руб.</td>
      <td>630 000 руб.</td>
      <td>660 000 руб.</td>
    </tr>
    <tr>
      <td>
      Дом 10 на 10
      </td>
      <td>435 000 руб.</td>
      <td>600 000 руб.</td>
      <td>675 000 руб.</td>
      <td>705 000 руб.</td>
    </tr>
    <tr>
      <td>
      Дом 10 на 12
      </td>
      <td>465 000 руб.</td>
      <td>615 000 руб.</td>
      <td>690 000 руб.</td>
      <td>720 000 руб.</td>
    </tr>
  </tbody>
</Table> */}
</Row>
  )
};

export default SizeBar;
