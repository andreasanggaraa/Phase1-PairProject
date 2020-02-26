'use strict';
module.exports = (sequelize, DataTypes) => {

  class CoffeeUser extends sequelize.Sequelize.Model {}
  
    CoffeeUser.init({
      status: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      CoffeeId: DataTypes.INTEGER,
      price: DataTypes.INTEGER
    })

  CoffeeUser.associate = function(models) {
    CoffeeUser.belongsTo(models.Coffee)
    CoffeeUser.belongsTo(models.User)
  };
  
  return CoffeeUser;
};