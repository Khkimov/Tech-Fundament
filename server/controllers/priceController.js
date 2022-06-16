const {
  Price,
  Type,
  Size,
  House,
  Material,
} = require('../db/models');

class PriceController {
  async create(req, res) {
    const {
      typeId,
      houseId,
      sizeId,
      materialId,
      price,
    } = req.body;
    const newPrice = await Price.create({
      typeId,
      houseId,
      sizeId,
      materialId,
      price,
    });
    return res.json(newPrice);
  }

  async getAll(req, res) {
    const prices = await Price.findAll({
      include: [House, Size, Type, Material],
      raw: true,
      order: [
        ['houseId', 'ASC'],
        ['sizeId', 'ASC'],
      ],
    });

    const allPrices = prices.reduce((acc, el) => {
      if (!acc[el['House.name']]) {
        acc[el['House.name']] = [{
          price: el.price,
          size: el['Size.name'],
          materialId: el.materialId,
          typeId: el.typeId,
        }];
      } else {
        acc[el['House.name']].push({
          price: el.price,
          size: el['Size.name'],
          materialId: el.materialId,
          typeId: el.typeId,
        });
      }
      return acc;
    }, {});
    console.log('-----------------------', allPrices);
    return res.json(allPrices);
  }

  async update(req, res) {
    const updatePrice = await Price.update(
      { price: req.body.price },

      {
        where: {
          typeId: req.body.typeId,
          materialId: req.body.materialId,
          houseId: req.body.houseId,
          sizeId: req.body.sizeId,
        },
      },
    );
    const result = await Price.findOne({
      where: {
        typeId: req.body.typeId,
        materialId: req.body.materialId,
        houseId: req.body.houseId,
        sizeId: req.body.sizeId,
      },
      raw: true,
    });

    res.json({ result });
  }
}

module.exports = new PriceController();
