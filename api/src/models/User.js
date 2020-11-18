const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },      
      fullname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail:true
        }, 
        unique: true,
      },
      phone: {
          type: DataTypes.BIGINT,
          allowNull: false
      },
      address: {
          type: DataTypes.STRING,
          allowNull: false
      },
      isAdmin: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      },
      password:{
          type: DataTypes.STRING,
      }

  });

};
