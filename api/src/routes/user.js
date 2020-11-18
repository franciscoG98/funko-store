const server = require('express').Router();
const { User, Order } = require('../db.js');
const { Op } = require("sequelize");


server.get('/', (req, res)=>{
    User.findAll()
    .then(user =>{
        res.status(200).json(user)
    })
    .catch(err => {
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
<<<<<<< HEAD
<<<<<<< HEAD

    let { fullname, email, phone, address, isAdmin } = req.body;

    if (!isAdmin) {
        if (!fullname || !email || !address || !phone) {
            return res.status(400).json({ msg: "Invalid or missing data" });
        }
    } else {
=======
=======
>>>>>>> 641b868f2dace5cdb435f5d1b7d63e363c964d51
 
    let { fullname, email, phone, address, purchases, isAdmin } = req.body;
 
    //if (!isAdmin) {
       // if (!fullname || !email || !address || !phone ) {
          //  return res.status(400).json({ msg: "Invalid or missing data" });
       // }
   // } else {
<<<<<<< HEAD
>>>>>>> userform
=======
=======

    let { fullname, email, phone, address, isAdmin } = req.body;

    if (!isAdmin) {
        if (!fullname || !email || !address || !phone) {
            return res.status(400).json({ msg: "Invalid or missing data" });
        }
    } else {
>>>>>>> acecbca9a16e55f8705ce39f677f8ea1b8a4a461
>>>>>>> 641b868f2dace5cdb435f5d1b7d63e363c964d51
        User.create({
            fullname,
            email,
            phone,
            address
        })
            .then(
                userCreated => {
                    res.status(200).json({ msg: "User created" , user: userCreated })
                })
            .catch(next);
   // }
 
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
