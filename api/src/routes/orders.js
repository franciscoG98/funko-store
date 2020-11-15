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
server.put('/:id', (req, res) => {
    const { state } = req.body;
    const { id } = req.params;


    if (!id || !state) {
        res.status(400).json({ msj: "invalid or missing data" });
    } else {
        Order.findOne({
            where: {
                [Op.and]: [
                    { id: UserId }, { state: 'cart' }
                ]
            }
        })
            .then(respuesta => {
                console.log(respuesta)
                // respuesta.update(state)
            })
            .then(updateState => {
                res.json(updateState)
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



module.exports = server;