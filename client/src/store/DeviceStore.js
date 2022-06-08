import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = []
    this._materials = []
    this._sizes = []
    this._houses = []
    this._prices = []
    this._smallSizes = [
      {id: 1, name: '3 на 4', price: {
        '300/500': '97 000р',
        '300/600': '112 000r',
        '300/1000': '135 000r',
        '300/1400': '180 000r'
      }},
      {id: 2, name: '4 на 4', price: {
        '300/500': '105 000р',
        '300/600': '120 000r',
        '300/1000': '150 000r',
        '300/1400': '195 000r'
      }},
      {id: 3, name: '5 на 6', price: {
        '300/500': '165 000р',
        '300/600': '180 000r',
        '300/1000': '225 000r',
        '300/1400': '285 000r'
      }},
      {id: 4, name: '6 на 6', price: {
        '300/500': '180 000р',
        '300/600': '210 000r',
        '300/1000': '270 000r',
        '300/1400': '345 000r'
      }},
    ]
    this._nonMaterial = [
      {id: 1, name: '6 на 6', price: {
        '300/600': '32 000р',
        '300/900': '53 600r',
        '300/1400': '98 000r',
        '300/1800': '128 000r'
      }},
      {id: 2, name: '8 на 8', price: {
        '300/600': '45 000р',
        '300/900': '65 000r',
        '300/1400': '122 000r',
        '300/1800': '180 000r'
      }},
      {id: 3, name: '8 на 9', price: {
        '300/600': '48 000р',
        '300/800': '68 000r',
        '300/1400': '150 000r',
        '300/1800': '198 000r'
      }},
      {id: 4, name: '9 на 9', price: {
        '300/600': '52 000р',
        '300/800': '71 000r',
        '300/1400': '154 000r',
        '300/1800': '206 000r'
      }},
      {id: 5, name: '10 на 10', price: {
        '300/600': '70 000р',
        '300/800': '87 000r',
        '300/1400': '177 000r',
        '300/1800': '225 000r'
      }},
    ]
    this._selectedType = {}
    this._selectedMaterial = {}
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
}
