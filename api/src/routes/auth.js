const server = require('express').Router();
const { User } = require('../db.js');
const bcrypt = require("bcrypt");
const saltRounds = 10;


// isAuthenticated

server.post('/login', (req, res) => {
    const { email, passwd } = req.body;

    console.log('email:\n', email, '\n password:\n', passwd);

    bcrypt
        .genSalt(saltRounds)
        .then(salt => {
            console.log(`Salt: ${salt}`);
            
            const hashed =bcrypt.hash(passwd, salt);
            return hashed
        })
        .then(hash => {
            console.log(`Hash: ${hash}`);
            res.send('/')
        })
        .catch(err => console.error(err.message));
    

});

module.exports = server;


// POST /auth/login
// ----------------------------------
// app.post('/login',
//   passport.authenticate('local'),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.redirect('/users/' + req.user.username);
//   });


// successRedirect : '/', // redirect to the secure profile section
//     failureRedirect : '/signup', // redirect back to the signup page. THIS IS JUST FOR TESTING TO SEE IF THE REDIRECT ON FAIL WORKS.
//     failureFlash : true, // allow flash messages