const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('order', {
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },  
      state: {
        type: DataTypes.ENUM('cart', 'created', 'processing', 'canceled', 'completed'),
        allowNull: false,
      }
  })
}
