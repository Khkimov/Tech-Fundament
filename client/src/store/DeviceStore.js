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
      {id: 1, name: 'Дом 8 на 8', size: '400/600', price: '360 000 руб',},
      {id: 2, name: 'Дом 9 на 9', size: '400/1200', price: '405 000 руб'},
      {id: 3, name: 'Дом 9 на 10', size: '400/1400', price: '435 000 руб'},
      {id: 4, name: 'Дом 10 на 10', size: '400/1600', price: '435 000 руб'},
      {id: 5, name: 'Дом 10 на 12', price: '465 000 руб'},
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

  get selectedType() {
    return this._selectedType
  }

  get selectedMaterial() {
    return this._selectedMaterial
  }
}
