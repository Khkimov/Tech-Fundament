import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Context } from '..';
import Carusel from '../components/Carusel';
import Materials from '../components/Materials';
import Quiz from '../components/quiz/Quiz';
import SizeBar from '../components/SizeBar';
import TypeBar from '../components/TypeBar';
import { fetchMaterials, fetchTypes, fetchSizes, fetchHouses, fetchPrices } from '../http/deviceAPI';

const Shop = observer(() => {
  const {device} = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchMaterials().then(data => device.setMaterials(data))
    fetchHouses().then(data => device.setHouses(data))
    fetchSizes().then(data => device.setSizes(data))
    fetchPrices(null, null).then(data => device.setPrices(data))
  }, [])

  useEffect(() => {
    fetchPrices(device.selectedType.id, device.selectedMaterial.id).then(data => {
      device.setPrices(data)
    })
  }, [device.selectedType, device.selectedMaterial])

  return (
    <Container>
      <SizeBar />
    </Container>
  )
});

export default Shop;
