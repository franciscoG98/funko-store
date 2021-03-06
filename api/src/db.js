require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/development`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Product, Categories , Order, User, Orderline, Reviews } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Categories.belongsToMany(Product, {through:'categoryp'})
Product.belongsToMany(Categories,{through:'categoryp'})

// n a n
Product.belongsToMany(Order, {through: Orderline})
Order.belongsToMany(Product, {through: Orderline})

// 1 a n
User.hasMany(Order)
Order.belongsTo(User)

// 1 a n
Order.hasMany(Orderline)
Orderline.belongsTo(Order)

// un producto tiene muchas revies

// una reviews tiene un usuario

// 1 a n
Product.hasMany(Reviews)
Reviews.belongsTo(Product)

// 1 a 1
User.hasMany(Reviews)
Reviews.belongsTo(User)


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
