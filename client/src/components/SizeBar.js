import React, { useContext } from "react";
// import { observer } from "mobx-react-lite";
// import { Context } from "..";
import { Row } from "react-bootstrap";
import Materials from "./Materials";
import PriceWithMaterial from "./PriceWithMaterial";
import SmallSizes from "./SmallSizes";

const SizeBar = () => {
  return (
    <Row>
      <h1>
      СТОИМОСТЬ ЛЕНТОЧНОГО ФУНДАМЕНТА
      </h1>
      <Materials/>
      <p>
      Расчет типовых популярных размеров ленточного фундамента. Цена, ориентировочная, под ключ в Москве и Московской области, включает в себя: материалы (арматура, бетон, песок, щебень, опалубка, крепежный материал и др.), доставка, работы по устройству фундамента (земляные работы), уборка мусора.
      </p>
      <PriceWithMaterial/>
      <h5>Расчет для небольших строений: баня, гараж, сарай и др.</h5>
      {/* <SmallSizes/> */}
   </Row>
  )
};

export default SizeBar;
