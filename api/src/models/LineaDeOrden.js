const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("lineadeorden", {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
        }, // a checkear lo del id
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
}

