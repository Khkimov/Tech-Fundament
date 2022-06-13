const { Type } = require('../db/models');

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    console.log(name);
    const type = await Type.create({ name });
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

module.exports = new TypeController();
