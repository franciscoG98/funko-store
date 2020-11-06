//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");

const {
  conn,
  Product,
  Categories,
  categoryp,
} = require("./src/db.js");

const {
  initialCategories,
  initialProducts,
  categoryProducts,
} = require("./src/seed.js");

//const Category = require("./src/models/Category.js");
// Syncing all the models at once.
conn
  .sync({ force: true })
  .then(() => {
    server.listen(3001, () => {
      console.log("server listening at 3001"); // eslint-disable-line no-console
    });
  })
  .then(() => {
    Categories.bulkCreate(initialCategories);
  })
  .then(() => {
    Product.bulkCreate(initialProducts);
  })
  .then(() => {
    categoryp.bulkCreate(categoryProducts);
  })
  .catch((error) => console.log('Error al bulkcreate', error))
