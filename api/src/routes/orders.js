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


module.exports = server;