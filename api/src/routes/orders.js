const server = require('express').Router();
const { Order } = require('../db.js');
const { Op } = require("sequelize");

server.get("/", (req, res) => {
    const query = req.query;

    Order.findAll({
        where: {
            [Op.or]: [
                {
                    status: {
                        [Op.substring]: `${query}`
                    }
                }
            ]
        }
    })
    .then(ordenes => {
        res.json({ordenes})
    })
    .catch(err => {
        res.json(err)
    })
})

//Modificar orden   PUT 
server.put('/orders/:id', (req, res) =>{
const {total, state, quantity, price} = req.body;
const {id} = req.params;


	const orden = {
		total,
        state,
        quantity,
        price
	}

	if (!id || !orden){
		res.status(400).json({msj: "invalid or missing data"});
	} else {
		Order.update(orden,
			{where: { id: id } })
			.then(ord => {
				res.json(ord)
			})
			.catch(err => {
				res.json(err)
			  })
	}
	
})

module.exports = server;