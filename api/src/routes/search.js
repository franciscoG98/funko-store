const server = require('express').Router();
const { Product } = require('../db.js');
const { Op } = require("sequelize");

server.get('/', (req, res, next) => {
    const {query} = req.query

    //console.log(typeof query)

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