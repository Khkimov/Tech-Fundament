import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";

const Pages = observer(() => {
  const {device} = useContext(Context);
  
  return (
    <div></div>
  )
});

export default Pages;
