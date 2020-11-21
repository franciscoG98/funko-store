const server = require('express').Router();
const { User } = require('../db.js');

server.put('/promote/:id', (req, res) => {
    const { id } = req.params;
    User.findByPk(id)
     .then(user => {
         if (!user.isAdmin){
          user.update({
                isAdmin: true
            })
        } else {
          user.update({
               isAdmin: false
            })
        }  
      })
      .then(() => res.json("Le diste/sacaste poder a ese gato"))
      .catch(err => res.json(err))  
})


module.exports = server