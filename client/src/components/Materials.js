import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Card, Row } from "react-bootstrap";

const Materials = observer(() => {
  const {device} = useContext(Context);

  return (
    <div className={"d-flex"}>
      {device.materials.map(material =>
        <Card
        style={{cursor: 'pointer'}}
        key={material.id}
        className={"p-3"}
        onClick={() => device.setSelectedMaterial(material)}
        border={material.id === device.selectedMaterial.id ? 'danger' : 'light'}
        >
          {material.name}
        </Card>
        )}
    </div>
  )
});

export default Materials;
