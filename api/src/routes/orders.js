const server = require('express').Router();
const { Order } = require('../db.js');
const { Op } = require("sequelize");

// server.get("/", (req, res) => {
//     const query = req.query;

//     Order.findAll({
//         where: {
//             [Op.or]: [
//                 {
//                     status: {
//                         [Op.substring]: `${query}`
//                     }
//                 }
//             ]
//         }
//     })
//     .then(ordenes => {
//         res.json({ordenes})
//     })
//     .catch(err => {
//         res.json(err)
//     })
// })

//Modificar orden   PUT 
server.put('/orders/:id', (req, res) =>{
const {state} = req.body;
const {id} = req.params;

	// const orden = {
	// 	total,
    //     state,
    //     quantity,
    //     price
	// }

	if (!id || !state){
		res.status(400).json({msj: "invalid or missing data"});
	} else {
		Order.update(state,
			{where: { id: id } })
			.then(orden => {
                
				res.json(ord)
			})
			.catch(err => {
				res.json(err)
			  })
	}
	
})

server.get('/', (req, res) => {
    Order.findAll()
    .then(o => {
        res.json(o)
    })
    .catch(err => {
        res.json(err)
    })
})

// retorna una orden en particular
server.get('/:id', (req, res) => {
	const { id } = req.params;
	Order.findOne({
		where: {
			orderId: id
		}
	})
	.then(o => {
		res.json(o)
	})
	.catch(err => {
		res.json(err)
	})
})


module.exports = server;