'use strict';
module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model {}

    User.init({
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      fullName: DataTypes.STRING,
      freecup: DataTypes.INTEGER,
      purchaseToReward: DataTypes.INTEGER,
      role: DataTypes.STRING
    },
    {
      hooks: {
        beforeCreate: (User, options) => {
          User.role = "customer"
        }
      },
      sequelize
    })

  User.associate = function(models) {
    User.hasMany(models.CoffeeUser)
  };

  return User;
};
