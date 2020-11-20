const server = require('express').Router();
const bcrypt = require("bcrypt");
const { User } = require('../db.js');

// isAuthenticated

server.post('/login', (req, res) => {
    const { email } = req.body;
    const { passwd } = req.body;

    res.send(console.log('email', email, 'password', passwd))


})


// POST /auth/login
