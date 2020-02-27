'use strict';
module.exports = (sequelize, DataTypes) => {

  class Inventory extends sequelize.Sequelize.Model {}

    Inventory.init({
      espresso: DataTypes.INTEGER,
      milk: DataTypes.INTEGER,
      ice: DataTypes.INTEGER,
      cup: DataTypes.INTEGER,
      sugar: DataTypes.INTEGER
    },
    {
      sequelize
    })

  Inventory.associate = function(models) {
    
  };
  
  return Inventory;
};