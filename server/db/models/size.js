const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Type, Material }) {
      this.belongsTo(Type, { foreignKey: 'typeId' });
      this.belongsTo(Material, { foreignKey: 'materialId' });
    }
  }
  Size.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    materialId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};
