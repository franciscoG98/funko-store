const { isNotAuthenticated, isAuthenticated } = require("./passport-config");

const server = require('express').Router();
const passport = require("passport");
const session = require("express-session");
const { User } = require('../db.js');


server.use(
  session({
    secret: 'secretFunkos',
    resave: false,
    saveUninitialized: false
  })
);
server.use(passport.initialize());
server.use(passport.session());

passport.serializeUser((user, done) => {
  console.log('serialize user:\n', user)
  done(null, user.id);
});

  passport.deserializeUser((id, done) => {
    User.findOne({
      where: {
        id,
      }
    })
  .then((user) => {
  console.log('deserialize user:\n', user)

    if (user) {
      return done(null, {
        username: user.username,
        fullname: user.fullname, 
        email: user.email,
        id: user.id,
        isAdmin: user.isAdmin,
        phone:user.phone, 
        address: user.address,
        password: user.password
        
      });
    } else {
      return done(new Error("User not found"), null);
    }
  })
  .catch((err) => {
    console.error(err);
    return done(new Error("Internal error"), null);
  });
})

// Login
server.post(
  "/login",
  isNotAuthenticated,
  passport.authenticate("local"),
  (req, res) => {
    console.log('aaaaaa:');
    // res.redirect('/');
    res.send({ user: req.user});
  }
);

// Logout
server.get("/logout", isAuthenticated, (req, res) => {
  req.logOut();
  res.send({ message: "You've logged out from your account" });
});

module.exports = server;
