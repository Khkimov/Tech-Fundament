const { House } = require('../db/models');

class HouseController {
  async create(req, res) {
    const { name } = req.body;
    const house = await House.create({ name });
    return res.json(house);
  }

  async getAll(req, res) {
    const houses = await House.findAll();
    return res.json(houses);
  }
}

module.exports = new HouseController();
