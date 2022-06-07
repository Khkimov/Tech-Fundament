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
      price,
    } = req.body;
    const newPrice = await Price.create({
      price,
    });
    return res.json(newPrice);
  }

  async getAll(req, res) {
    const prices = await Price.findAll({
      include: [House, Size, Type, Material],
    });
    return res.json(prices);
  }
}

module.exports = new PriceController();
