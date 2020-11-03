const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define("categories", {
        name: {
            type: DataTypes.STRING,
            unique: true,   
        },
        description: {
            type: DataTypes.TEXT
        }
    })

}


