'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CoffeeUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      CoffeeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Coffees',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      order: {
        type: Sequelize.STRING
      },
      isAccepted: {
        type: Sequelize.BOOLEAN
      },
      isPrepared: {
        type: Sequelize.BOOLEAN
      },
      isReady: {
        type: Sequelize.BOOLEAN
      },
      price: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CoffeeUsers');
  }
};