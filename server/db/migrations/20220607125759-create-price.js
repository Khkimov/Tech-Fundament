module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Prices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      typeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Types',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      houseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Houses',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      sizeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sizes',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      materialId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Materials',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      price: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Prices');
  },
};
