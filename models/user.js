'use strict';
module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model {}

    User.init({
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      freecup: DataTypes.INTEGER,
      purchaseToReward: DataTypes.STRING,
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
