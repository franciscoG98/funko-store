const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('reviews', {
    qualification: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.ENUM('Useless', 'Poor', 'Ok', 'Good', 'Excellent' ),
      allowNull: false,
    }
  });

};
