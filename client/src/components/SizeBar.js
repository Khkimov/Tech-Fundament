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
      <PriceWithMaterial/>
      {/* <SmallSizes/> */}
   </Row>
  )
};

export default SizeBar;
