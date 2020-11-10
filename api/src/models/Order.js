const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('order', {
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,

      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    //   owner: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: true,
    //   }
  })
}
