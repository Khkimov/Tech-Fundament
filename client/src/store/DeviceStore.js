import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = []
    this._materials = []
    this._sizes = []
    this._houses = []
    this._prices = []
    this._selectedType = {}
    this._selectedMaterial = {}
    this._selectedHouse = {}
    this._selectedSize = {}
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setMaterials(materials) {
    this._materials = materials
  }

  setHouses(houses) {
    this._houses = houses
  }

  setSizes(sizes) {
    this._sizes = sizes
  }

  setPrices(prices) {
    this._prices = prices
  }

  setSmallSizes(smallSizes) {
    this._smallSizes = smallSizes
  }

  setNonMaterial(nonMaterial) {
    this._nonMaterial = nonMaterial
  }

  setSelectedType(type) {
    this._selectedType = type
  }

  setSelectedMaterial(material) {
    this._selectedMaterial = material
  }

  setSelectedHouse(house) {
    this._selectedHouse = house
  }

  setSelectedSize(size) {
    this._selectedSize = size
  }


  get types() {
    return this._types
  }

  get materials() {
    return this._materials
  }

  get houses() {
    return this._houses
  }

  get sizes() {
    return this._sizes
  }

  get prices() {
    return this._prices
  }

  get smallSizes() {
    return this._smallSizes
  }

  get nonMaterial() {
    return this._nonMaterial
  }

  get selectedType() {
    return this._selectedType
  }

  get selectedMaterial() {
    return this._selectedMaterial
  }

  get selectedHouse() {
    return this._selectedHouse
  }

  get selectedSize() {
    return this._selectedSize
  }
}
