'use strict';
module.exports = (sequelize, DataTypes) => {

  class Coffee extends sequelize.Sequelize.Model {}

    Coffee.init({
      name: DataTypes.STRING,
      sellingPrice: DataTypes.INTEGER,
      espresso: DataTypes.INTEGER,
      sugar: DataTypes.INTEGER,
      milk: DataTypes.INTEGER,
      ice: DataTypes.INTEGER
    },
    {
      sequelize
    })
    
  Coffee.associate = function(models) {
    Coffee.hasMany(models.CoffeeUser)
  };

  return Coffee;
};