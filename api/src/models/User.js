const { DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    const User = sequelize.define('user', {
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
                isEmail: true
            },
            unique: true,
        },
        phone: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        password: {
            type: DataTypes.STRING,
        },
        googleId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }

    });
    User.beforeCreate((user, options) => {

        return bcrypt.hash(user.password, 10)
            .then(hash => {
                user.password = hash;
            })
            .catch(err => {
                throw (err);
            });
    });
    //hook update password
    User.addHook('beforeUpdate', (user) => {
        // console.log(user);
        if (user.password) {
            user.password = bcrypt.hashSync(user.previous.password, bcrypt.genSaltSync(10), null);
        }
    });
    /* User.beforeBulkCreate((user, options) => {
    
        return bcrypt.hash(user.password, 10)
            .then(hash => {
                user.password = hash;
            })
            .catch(err => { 
                throw (err); 
            });
    }); */


};
