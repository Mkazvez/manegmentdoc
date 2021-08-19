module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define(
      'order',
      {
        order: DataTypes.JSON
      },
      {}
    )
    Order.associate = function(models) {
      // associations can be defined here
    }
    return Order
  }
  