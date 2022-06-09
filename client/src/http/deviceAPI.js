import { $host, $authHost } from "."

export const createType = async (type) => {
  const {data} = await $authHost.post('api/type', type);
  return data;
}

export const fetchTypes = async () => {
  const {data} = await $host.get('api/type' )
  return (data)
}

// Material
//////////////////////////////////////////////////////////////////////////////

export const createMaterial = async (material) => {
  const {data} = await $authHost.post('api/material', material);
  return data;
}

export const fetchMaterials = async () => {
  const {data} = await $host.get('api/material' )
  return (data)
}

// House
////////////////////////////////////////////////////////////////////////////

export const createHouse = async (house) => {
  const {data} = await $authHost.post('api/house', house);
  return data;
}

export const fetchHouses = async () => {
  const {data} = await $host.get('api/house' )
  return (data)
}

// Size
////////////////////////////////////////////////////////////////////////////

export const createSize = async (size) => {
  const {data} = await $authHost.post('api/size', size);
  return data;
}

export const fetchSizes = async () => {
  const {data} = await $host.get('api/size' )
  return (data)
}

// Price
///////////////////////////////////////////////////////////////////////////

export const createPrice = async (price) => {
  const {data} = await $authHost.post('api/price', price);
  return data;
}

export const fetchPrices = async (typeId, sizeId, houseId, materialId) => {
  const {data} = await $host.get('api/price', {params: {
    typeId, sizeId, houseId, materialId
  }})
  return (data)
}
