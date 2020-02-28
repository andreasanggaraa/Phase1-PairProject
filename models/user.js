'use strict';
module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model {}

    User.init({
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fullName: DataTypes.STRING,
      freecup: DataTypes.INTEGER,
      purchaseToReward: DataTypes.INTEGER,
      role: DataTypes.STRING
    },
    {
      hooks: {
        beforeCreate: (User, options) => {
          User.role = "customer",
          User.freecup = 0,
          User.purchaseToReward = 0
        }
      },
      sequelize
    })

  User.associate = function(models) {
    User.hasMany(models.CoffeeUser)
  };

  return User;
};
