const server = require('express').Router();
const { User, Order, orderline } = require('../db.js');
const OrderLine = require('../models/OrderLine.js');


//POST a carrito

server.post('/:idUser/cart', (req, res) =>{
	const {idUser} = req.params;
	const {quantity, price, productId, orderId } = req.body;
	
	/* if (!idUser){
		res.status(400).json({msj: "You have to be a logged user"})}else {; *///esto va alfront
	 var order
    Order.findOrCreate({
        where:{
            userId: idUser,
            state: 'cart',    
            }
    }).then((order) => {
         res.status(200)
         return OrderLine.create({
             productId: productId,
             quantity: quantity,
             price: price,
             orderId: order.id
         })
    })
})