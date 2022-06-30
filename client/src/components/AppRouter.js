import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import Shop from '../pages/Shop';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import FenceFoundation from '../pages/FenceFoundation';
import PileRiggerFoundation from '../pages/PileRiggerFoundation';
import SizeBar from './SizeBar';
import Quiz from './quiz/Quiz';

const AppRouter = observer(() => {
  const {admin} = useContext(Context);
  return (
    <Routes>
      {admin.isAuth && authRoutes.map(({path, Component}) =>
      <Route key={path} path={path} element={<Component/>} exact/>

      )}
      {publicRoutes.map(({path, Component}) =>
      <Route key={path} path={path} element={<Component/>} exact/>

      )}
      <Route path="/" element={<Shop/>} exact/>
      <Route path="/type/1" element={<Shop/>} exact/>
      <Route path="/type/2" element={<FenceFoundation/>} exact/>
      <Route path="/type/3" element={<PileRiggerFoundation/>} exact/>
    </Routes>
  )
})

export default AppRouter;
