const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Size, Material }) {
      this.hasMany(Size, { foreignKey: 'typeId' });
      this.belongsToMany(Material, { through: 'TypeMaterial', foreignKey: 'typeId' });
    }
  }
  Type.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};
