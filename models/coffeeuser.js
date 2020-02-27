'use strict';
module.exports = (sequelize, DataTypes) => {

  class CoffeeUser extends sequelize.Sequelize.Model {

    getStatus() {
      if(this.isReady){
        return "Your order is completed, thanks for ordering!"
      }
      else if (this.isPrepared) {
        return "Your coffee is being prepared"
      }
      else if(this.isAccepted) {
        return "Your order is accepted"
      }
      else {
        return "Waiting to accepted"
      }
    }
    
  }
  
    CoffeeUser.init({
      UserId: DataTypes.INTEGER,
      CoffeeId: DataTypes.INTEGER,  
      order: DataTypes.STRING,
      isAccepted: DataTypes.STRING,
      isPrepared: DataTypes.STRING,
      isReady: DataTypes.STRING,
      status: DataTypes.STRING,
      price: DataTypes.INTEGER
    },
    {
      hooks: {
        beforeCreate: (Order, options) => {
          Order.isAccepted = false,
          Order.isPrepared = false,
          Order.isReady = false
        }
      },
      sequelize
    })

  CoffeeUser.associate = function(models) {
    CoffeeUser.belongsTo(models.Coffee)
    CoffeeUser.belongsTo(models.User)
  };
  
  return CoffeeUser;
};