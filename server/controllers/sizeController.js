const { Size } = require('../db/models');
const ApiError = require('../error/ApiError');

class SizeController {
  async create(req, res, next) {
    try {
      const {
        name, size, price, typeId, materialId,
      } = req.body;
      console.log(req.body);
      const sizeAndName = await Size.create({
        name, size, price, typeId, materialId,
      });
      return res.json(sizeAndName);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    const { materialId, typeId } = req.query;
    let sizes;
    if (!materialId && !typeId) {
      sizes = await Size.findAll();
    }
    if (materialId && !typeId) {
      sizes = await Size.findAll({ where: { materialId } });
    }
    if (!materialId && typeId) {
      sizes = await Size.findAll({ where: { typeId } });
    }
    if (materialId && typeId) {
      sizes = await Size.findAll({ where: { typeId, materialId } });
    }
    return res.json(sizes);
  }

  async getOne(req, res) {

  }
}

module.exports = new SizeController();
