const server = require('express').Router();
const { User, Order } = require('../db.js');
const { Op } = require("sequelize");


server.get('/:id', (req, res) => {
    const { id } = req.params;

    User.findAll({
        where: {
            id: id
        }
    })
        .then(user => {
            res.json(user);
        })
})

//route for a user creation depending on if is admin or not.
server.post('/', function (req, res, next) {

    let { fullname, email, phone, address, purchases, isAdmin } = req.body;

    if (!isAdmin) {
        if (!fullname || !email || !address || !phone || !purchases) {
            return res.status(400).json({ msg: "Invalid or missing data" });
        }
    } else {
        User.create({
            fullname,
            email,
            phone,
            address,
            purchases
        })
            .then(
                (userCreated) => {
                    res.status(200).json({ msg: "User created", user: userCreated })
                })
            .catch(next);
    }

    // if (isAdmin){ 

    // }         
});

server.put('/:id', (req, res) => {
    const { id } = req.params;
    let { fullname, email, phone, address, purchases, isAdmin } = req.body;

    if (!id) {
        res.status(404).json({ msg: "Seleccione un usuario a eliminar" })
    }
    else {
        User.findByPk(id)
            .then(user => {
                user.update({ fullname, email, phone, address, purchases, isAdmin })
            })
            .then(res.status(201).json({ msj: 'Usuario modificado' }))
            .catch(err => {
                console.log(err)
                res.json({ err });
            })
    }

})

server.delete("/:id", (req, res) => {
    const { id } = req.params;

    if (!id) {
        res.status(404).json({ msg: "Seleccione un usuario a eliminar" })
    } else {
        User.destroy({ where: { id } })
            .then(() => res.json({ msg: "Usuario eliminado" }))
            .catch(err => res.json(err))
    }
})



server.delete('/:idUser/cart/', (req, res) => {
    const { idUser } = req.params;
    if (!idUser) {
        res.status(404).json({ msg: "Seleccione una órden a eliminar" })
    }
    else {
        Order.destroy({ where: { id: idUser } })
    }

})



module.exports = server;