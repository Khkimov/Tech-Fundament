const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Type, House, Size, Material,
    }) {
      this.belongsTo(Type, { foreignKey: 'typeId' });
      this.belongsTo(House, { foreignKey: 'houseId' });
      this.belongsTo(Size, { foreignKey: 'sizeId' });
      this.belongsTo(Material, { foreignKey: 'materialId' });
    }
  }
  Price.init({
    typeId: DataTypes.INTEGER,
    houseId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    materialId: DataTypes.INTEGER,
    price: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Price',
  });
  return Price;
};
