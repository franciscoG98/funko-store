const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("orderline", {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    })
}


