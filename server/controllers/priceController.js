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
    });
    // const pr = prices.map((el) => ({
    //   price: el.price,
    //   size: el.Size.name,
    //   house: el.House.name,
    // }));

    const allPrices = prices.reduce((acc, el) => {
      if (!acc[el.House.name]) {
        acc[el.House.name] = [{
          price: el.price,
          size: el.Size.name,
          materialId: el.materialId,
        }];
      } else {
        acc[el.House.name].push({
          price: el.price,
          size: el.Size.name,
          materialId: el.materialId,
        });
      }
      return acc;
    }, {});
    return res.json(allPrices);
  }
}

module.exports = new PriceController();
