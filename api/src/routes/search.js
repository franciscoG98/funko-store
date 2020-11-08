const server = require('express').Router();
const { Product } = require('../db.js');
const { Op } = require("sequelize");

server.get('/', (req, res, next) => {
    const {query} = req.query
<<<<<<< HEAD

	
=======
    //console.log(typeof query)
>>>>>>> d1a65c9fdedec893e51a9e9e237dafa79d3eb3c5
	
	 Product.findAll({
       where: {
        [Op.or]: [
          {
            name:{
              [Op.substring]: `${query}`
            }
          }, 
          {
            description: {
              [Op.substring]: `${query}`  
            }
       }] 
	  }})
		.then(products => {
			res.send(products);
		})
		.catch(err => {
			res.json(err);
		}); 
});

module.exports = server;