const server = require('express').Router();
const { User, Order } = require('../db.js');
const { Op } = require("sequelize");


server.get('/', (req, res) => {
    User.findAll()
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.json({ err });
        })
})


server.get('/:id/me', (req, res) => {

    const { id } = req.params;
    return User.findOne({
        where: { id: id },
        include: [Order]
    }).then(user => {
        res.status(200).json(user)
    }).catch(err => {
        res.json({ err });
    })
})


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

    let { username, fullname, email, phone, address, purchases, isAdmin, password } = req.body;
    User.create({
        username,
        fullname,
        email,
        phone,
        address,
        password
    })
    .then(userCreated => {
        id = userCreated.id
       return Order.create({
                userId: id,
                state: 'cart'
         })
        })
      .then(order => {
          //console.log(usuario)
                res.status(200).json({ msg: "User created", user: order })
            }) 
        .catch(next);

});


server.put('/:id', (req, res) => {
    const { id } = req.params;
    let { username, fullname, email, phone, address, purchases, isAdmin, password } = req.body;

    if (!id) {
        res.status(404).json({ msg: "Seleccione un usuario a eliminar" })
    }
    else {
        User.findByPk(id)
            .then(user => {
                user.update({ username, fullname, email, phone, address, purchases, isAdmin, password })
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
