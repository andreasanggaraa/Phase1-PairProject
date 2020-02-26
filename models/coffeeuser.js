'use strict';
module.exports = (sequelize, DataTypes) => {

  class CoffeeUser extends sequelize.Sequelize.Model {}
  
    CoffeeUser.init({
      UserId: DataTypes.INTEGER,
      CoffeeId: DataTypes.INTEGER,
      order: DataTypes.STRING,
      status: DataTypes.STRING,
      price: DataTypes.INTEGER
    })

  CoffeeUser.associate = function(models) {
    CoffeeUser.belongsTo(models.Coffee)
    CoffeeUser.belongsTo(models.User)
  };
  
  return CoffeeUser;
};