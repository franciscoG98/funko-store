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
            res.json({ ordenes })
        })
        .catch(err => {
            res.json(err)
        })
})

server.put('/orders/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!id || !status) {
        res.status(400).json({ msj: "invalid or missing data" });
    } else {
        Order.update(status,
            { where: { userId: id } })
            .then(newState => {
                res.json(newState)
            })
            .catch(err => {
                res.json(err)
            })
    }
})

module.exports = server;