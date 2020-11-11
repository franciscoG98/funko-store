const server = require('express').Router();
const { User } = require('../db.js');


//route for a user creation depending on if is admin or not.
    server.post('/', function (req, res, next) {

        let { fullname, email, phone, address, purchase, isAdmin} = req.body;

        if(!isAdmin){
            if (!fullname || !email || !address || !phone || !purchase) {
                return res.status(400).json({ msg: "Invalid or missing data" });
              }
            }else{
                User.create({
                    fullname,
                    email,
                    phone,
                    address,
                    purchase
                })
                .then(
                    (userCreated) => 
                { res.status(200).json({ msg: "User created", user: userCreated })
                })
                .catch(next);
            }

        // if (isAdmin){ 

        // }         
});

server.delete("/:id", (req, res) => {
    const {id} = req.params;

    if(!id){
        res.status(404).json({msg: "Seleccione un usuario a eliminar"})
    } else {
        User.destroy({where: {id}})
        .then(() => res.json({msg: "Usuario eliminado"}))
        .catch(err => res.json(err))
    }


})

module.exports = server;