const server = require('express').Router();
const { Order } = require('../db.js');
const { Op } = require("sequelize");


server.get('/', (req, res) => {
    Order.findAll()
        .then(o => {
            res.json(o)
        })
        .catch(err => {
            res.json({err})
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
            res.json({err})
        })
})

server.put('/:id', (req, res) => {
    const { id } = req.params;
    let { state } = req.body;

    if (!id || !state) {
        res.status(400).json({ msj: "invalid or missing data" });
    } else {
        Order.findOne({
            where: {
                id: id
            }
        })
            .then(async order => {
                return await order.update({ state })
            })
            .then(orderUpdated => {
                id = orderUpdated.userId
               return Order.create({
                        userId: id,
                        state: 'cart'
                 })
                })
            .then(()  => res.json({ msj: 'Order successfully updated!' }))
            .catch(err => {
                res.json({ err });
            })
    }
})

module.exports = server;