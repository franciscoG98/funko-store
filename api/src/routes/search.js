const server = require('express').Router();
const { Product, Categories } = require('../db.js');

server.get('/', (req, res, next) => {
    const {query} = req.query
	
	
	 Product.findAll({
       where: {name: query}
	  })
		.then(products => {
			res.send(products);
		})
		.catch("no esta"); 
});

module.exports = server;