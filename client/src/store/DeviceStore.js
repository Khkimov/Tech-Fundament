import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Ленточный фундамент'},
      {id: 2, name: 'Монолитная плита'},
      {id: 3, name: 'Цокольный этаж'},
      {id: 4, name: 'УШП фундамент'},
      {id: 5, name: 'Свайно-ростверковый'},
      {id: 6, name: 'Свайно-забивной'},
      {id: 7, name: 'Свайно-винтовой'}
    ]
    this._materials = [
      {id: 1, name: 'Под ключ'},
      {id: 2, name: 'Без материала'}
    ]
    this._sizes = [
      {id: 1, name: 'Дом 8 на 8', price: {
        '400/600': '360 000р',
        '400/1200': '510 000r',
        '400/1400': '570 000r',
        '400/1600': '600 000r'
      }},
      {id: 2, name: 'Дом 9 на 9', price: {
        '400/600': '405 000р',
        '400/1200': '555 000r',
        '400/1400': '615 000r',
        '400/1600': '645 000r'
      }},
      {id: 3, name: 'Дом 9 на 10', price: {
        '400/600': '435 000р',
        '400/1200': '570 000r',
        '400/1400': '630 000r',
        '400/1600': '660 000r'
      }},
      {id: 4, name: 'Дом 10 на 10', price: {
        '400/600': '435 000р',
        '400/1200': '600 000r',
        '400/1400': '675 000r',
        '400/1600': '705 000r'
      }},
      {id: 4, name: 'Дом 10 на 12', price: {
        '400/600': '465 000р',
        '400/1200': '615 000r',
        '400/1400': '690 000r',
        '400/1600': '720 000r'
      }},
    ]
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
  setSizes(sizes) {
    this._sizes = sizes
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

  get sizes() {
    return this._sizes
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
