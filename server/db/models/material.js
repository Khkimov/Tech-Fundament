const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Size, Type }) {
      this.hasMany(Size, { foreignKey: 'materialId' });
      this.belongsToMany(Type, { through: 'TypeMaterial', foreignKey: 'materialId' });
    }
  }
  Material.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Material',
  });
  return Material;
};
