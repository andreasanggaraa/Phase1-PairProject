'use strict';
module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model {}

    User.init({
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      birthday: DataTypes.DATEONLY,
      freecup: DataTypes.INTEGER,
      purcaseToReward: DataTypes.STRING,
      role: DataTypes.STRING
    },
    {
      sequelize
    })
    
  User.associate = function(models) {
    User.hasMany(models.CoffeeUser)
  };

  return User;
};