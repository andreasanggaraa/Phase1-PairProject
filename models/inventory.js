'use strict';
module.exports = (sequelize, DataTypes) => {

  class Inventory extends sequelize.Sequelize.Model {}

    Inventory.init({
      stockName: DataTypes.STRING,
      quantity: DataTypes.FLOAT 
    })

  Inventory.associate = function(models) {
    
  };
  return Inventory;
};