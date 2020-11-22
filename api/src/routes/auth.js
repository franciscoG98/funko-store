// if(process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }

const server = require('express').Router();
const { User } = require('../db.js');
const passport = require("passport");

// ---------------------------------------------------------------------------------------------------------------------
// const flash = require('express-flash');
// const flash = require('express-session');

// const getAllUsers = (req, res)=>{
//   User.findAll()
//   .then(user =>{
//     res.status(200).json(user)
//   })
//   .catch(err => {
//     console.log(err);
//   })
// }

// console.log(getAllUsers())

// const users = getAllUsers();
// console.log('esta aca', users)

// const initializePassport = require("./passport-config");
// const { session } = require('passport');

// initializePassport(passport, email => {
//   return users.find(user => user.email === email)
//   // esto igual es porque el chabon crea los usuarios en un array de users locales
// });

// server.use(passport.initialize());
// server.use(passport.session());

// ---------------------------------------------------------------------------------------------------------------------

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
// ---------------------------------------------------------------------------------------------------------------------



// server.post("/login", passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',


//   // failureFlash: true

//   // esto hace que flash por atras le mandes unos mmensajitos a la pag que son los msj que yo le puse,
//   // minuto 26
// },
//   console.log('coso')
//   // aca tendria que devolver el usuario para que hjaga algo no se
// ));

// ---------------------------------------------------------------------------------------------------------------------

const {  isNotAuthenticated } = require("./passport-config");

// Login
server.post(
  "/login",
  isNotAuthenticated,
  passport.authenticate("local"),
  (req, res) => {
    res.send({ user: req.user, logged: true });
  }
);

module.exports = server;
