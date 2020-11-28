const server = require('express').Router();
const { Product, User, Order, Orderline } = require('../db.js');
//const  = require('../models/OrderLine.js');
// const bcrypt = require('bcryptjs'); esto es el require para hashear la contraseña

//GET a carrito

server.get('/:idUser/cart', (req, res) => {
    const { idUser } = req.params
    return Order.findOne({
        where: {
            userId: idUser,
            state: 'cart',
        },
        include: [Product, Orderline]
    }) /* .then((orderFound) => {
        idOrder = orderFound.id;

        return Orderline.findAll({
            where: {
                orderId: idOrder,  
            },
            //include: {all: true, nested: true}  
        } 
        )
    })  */
        .then((e) => res.json(e))
        .catch(err => res.json(err))
})

//recibimos una orderline , completa (cada vez que agregan un producto, ya sea que el prod esté en el carro o no)
//compro un capi, recibo: {id: (id de OL), orderid: ..., prodId: 1, quant:1, price: 10}
//compro otro capi, recibo: {id: (id de OL), orderid: ", prodId: 1, quant:2, price: 20}

server.post('/:idUser/cart', async (req, res) => {
    const { idUser } = req.params;
    const prod = req.body;
   
    const Orden = await Order.findOrCreate({
        where: {
            userId: idUser,
            state: 'cart',
        },
     })
     Orden[0].total += prod.price
    idOrd = Orden[0].id
    const orderFound = await Orderline.findOne({
        where: {
            orderId: idOrd,
            productId: prod.id,
        }
    })
    if (orderFound) {
        return orderFound.update({
            productId: prod.id,
            quantity: orderFound.quantity + 1,
            price: prod.price,
            subtotal: orderFound.subtotal + prod.price
        }).then((r) => res.json(r))
    } else {
        return Orderline.create({
            orderId: idOrd,
            productId: prod.id,
            quantity: prod.quantity,
            price: prod.price,
            subtotal: prod.price * prod.quantity
        })
            .then((r) => res.json(r))
            .catch(err => res.json(err))
    }
})

server.put('/:idUser/cart', async (req, res) => {
    const { idUser } = req.params;
    const prod = req.body;
    console.log(prod)
    return Order.findOne({
        where: {
            userId: idUser,
            state: 'cart',
        }
    }).then((Orden) => {
      idOrd = Orden.id
      return Orderline.findOne({
        where: {
            orderId: idOrd,
            productId: prod.productId,
            }
        }) 
    })
    .then((orderlineFound) => {
        
        return orderlineFound.update({
            quantity: prod.quantity,
            price: prod.price,
            subtotal: (prod.price * prod.quantity)
        })
    }) 
    .then((e) => res.json(e))
    .catch(err => res.json(err))
})



//delete orderline
server.delete('/:idUser/cart/:prodId', (req, res) => {
    const { idUser, prodId } = req.params;
    return Orderline.destroy({
        where: {
            productId: prodId
        }
    })
        .then(() => res.json("Voló"))
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
server.put('/:id/passwordReset', (req, res) => {
    
    const { id } = req.params;
    const resetPassword = req.body.password;
    console.log(id);
    

    User.findOne({
        where: {
            id: id,
        },
    })
        .then((data) => {
            console.log(data);
            data.update({ password: resetPassword })
        })
        .then(() => {
            res.json(`Your password was successfully updated`)
        })
        .catch(err => {
            res.status(400).json(err)
        })

});





module.exports = server

