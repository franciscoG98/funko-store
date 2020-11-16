const server = require('express').Router();
const { User, Order, Orderline } = require('../db.js');
//const  = require('../models/OrderLine.js');

//GET a carrito

server.get('/:idUser/cart', (req, res) => {
    const { idUser } = req.params
    return Order.findOne({
        where: {
            userId: idUser,
            state: 'cart',
        }
    }).then((orderFound) => {
        idOrder = orderFound.id;
        return Orderline.findAll({
            where: {
                orderId: idOrder,
            }
        })
    })
        .then((e) => res.json(e))
        .catch(err => res.json(err))
})

//POST a carrito

/* server.post('/:idUser/cart', (req, res) =>{
   const {idUser} = req.params;
   const  orderlines  = req.body; //esto seria el arrMap[orderlines] 
   //const { productId, price, quantity } = orderlines;	
   return Order.findOrCreate({
        where:{
            userId: idUser,
            state: 'cart',    
            }
    }).then((orderCreated) => {
        idOrd = orderCreated[0].id
        return Orderline.findOrCreate({
            where:{                
                orderId: idOrd,                         //1          //1
                productId: orderlines.productId,        //1          //1
                quantity: orderlines.quantity,          //2          //3 
                price: orderlines.price,                //10         //20
                }
            })
    }).then((lineCreated)=> {
       return lineCreated[0].update({
            productId: orderlines.productId,
            quantity: orderlines.quantity,
            price: orderlines.price,
        })
        }).then((r)=> res.json(r))
        .catch(err=> res.json(err))
})  */

server.post('/:idUser/cart', async (req, res) => {
    const { idUser } = req.params;
    const orderlines = req.body;
    const Orden = await Order.findOrCreate({
        where: {
            userId: idUser,
            state: 'cart',
        }
    })
    idOrd = Orden[0].id
    const orderFound = await Orderline.findOne({
        where: {
            orderId: idOrd,
            productId: orderlines.productId,
        }
    })
    if (orderFound) {
        return orderFound.update({
            productId: orderlines.productId,
            quantity: orderlines.quantity,
            price: orderlines.price,
        }).then((r) => res.json(r))
    } else {
        return Orderline.create({
            orderId: idOrd,
            productId: orderlines.productId,
            quantity: orderlines.quantity,
            price: orderlines.price,
        })
            .then((r) => res.json(r))
    }
})

server.put('/:idUser/cart', (req, res) => {
    const { idUser } = req.params;
    //const  orderlines  = req.body; //esto seria el arrMap[orderlines] 
    const { productId, price, quantity } = req.body;
    return Order.findOne({
        where: {
            userId: idUser,
            state: 'cart',
        }
    }).then((orderFound) => {
        idO = orderFound.id
        return Orderline.findOne({
            where: {
                orderId: idO,
                productId: productId,
            }
        })
    }).then((lineFound) => {
        lineFound.update({
            productId: productId,
            quantity: quantity,
            price: price
        })
    }).then((r) => res.json("OK"))
        .catch(err => res.json(err))
})

//GET /users
server.get('/:id/orders', (req, res) => {
    const { id } = req.params
    return Order.findAll({ where: { userId: id } })
        .then((e) => res.json(e))
        .catch(err => res.json(err))
})

//Reset password route
server.post('/:id/passwordReset', (req, res) => {
    const { id } = req.params;
    const resetPassword = req.body;

    User.findOne({
        where: {
            id: id,
        },
    })
        .then((data) => {
            data.update({ password: resetPassword })
        })
        .then((newPass) => {
            res.json(newPass)
        })
        .catch(err => {
            res.status(400).json(err)
        })

});

module.exports = server

