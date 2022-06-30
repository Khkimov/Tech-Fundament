import EmailModal from '../components/quiz/EmailModal';

const IMAGES = 
[{ 
  name: 'Шаг 1',
  step: [
  {id: 1, step: 1, img: require('./houses/house1.png'),
   type: 'Дом',
  },
  {id: 2, step: 1, img: require('./houses/commercial-building1.png'),
   type: 'Офис центр',
  },
  {id: 3, step: 1, img: require('./houses/supermarket.png'),
   type: 'Магазин',
  },
  {id: 4, step: 1, img: require('./houses/banya-iz-brevna-ili-brusa1.png'),
   type: 'Баня',
  },
  {id: 5, step: 1, img: require('./houses/Garage.png'),
   type: 'Гараж',
  },
  {id: 6, step: 1, img: require('./houses/zabor_1.png'),
   type: 'Забор',
  },
]},
{ 
  name: 'Шаг 2',
  step: [
  {id: 7, step: 2, img: require('./foundation/plitniy-foundation.png'),
   type: 'Плитный фундамент',
   description: 'Данный тип относится к числу наиболее популярных моделей обустройства оснований.'
  },
  {id: 8, step: 2, img: require('./foundation/melkozaglublenniy.png'),
   type: 'МЗФЛ',
   description: 'Данный тип относится к числу наиболее популярных моделей обустройства оснований.'
  },
  {id: 9, step: 2, img: require('./foundation/svayno-rastverkovy.jpg'),
   type: 'Свайно ростверковый',
   description: 'Применяется данный тип фундамента в местностях с подвижными глинистыми и песчаными основаниями, с существенными рельефными перепадами.'
  },
  {id: 10, step: 2, img: require('./foundation/sokolniy-etazh.png'),
   type: 'Цокольный этаж',
   description: 'Основным конструктивным преимуществом устройства цокольного этажа является добавление полезной площади в доме.'
  },
  {id: 11, step: 2, img: require('./foundation/plitnyj_shema.png'),
   type: 'Плитный фундамент',
   description: 'Плитный фундамент, или как его еще называют – монолитная плита, считается самой надежной опорой для строительства будущего дома. '
  },
  {id: 12, step: 2, img: require('./foundation/lent_fund-zabor.png'),
   type: 'Ленточный фундамент для забора',
   description: 'Плитный фундамент, или как его еще называют – монолитная плита, считается самой надежной опорой для строительства будущего дома. '
  },
]},
]
export default IMAGES;
