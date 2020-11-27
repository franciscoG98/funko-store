const server = require('express').Router();
const { Order } = require('../db.js');
const { Op } = require("sequelize");

server.get("/", (req, res) => {
    const query = req.query;
    Order.findAll({
        where: {
           state: query.query
        }
    })
    .then(ordenes => {
        res.json({ordenes})
    })
    .catch(err => {
        res.json(err.message)
    })
})



// server.get('/', (req, res) => {
//     Order.findAll()
//         .then(o => {
//             res.json(o)
//         })
//         .catch(err => {
//             res.json({err})
//         })
// })

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
            .then(order => {
                order.update({ state })
            })
            .then(res.status(201).json({ msj: 'Order successfully updated!' }))
            .catch(err => {
                res.json({ err });
            })
    }
})

module.exports = server;