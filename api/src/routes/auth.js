const { isNotAuthenticated, isAuthenticated } = require("./passport-config");

const server = require('express').Router();
const passport = require("passport");
const session = require("express-session");
const { User } = require('../db.js');
require('../passport-google-oauth20/googleStartegy');

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
  // console.log(user)
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findOne({
    where: {
      id,
    }
  })
    .then((user) => {
      if (user) {
        return done(null, {
          username: user.username,
          fullname: user.fullname,
          email: user.email,
          id: user.id,
          isAdmin: user.isAdmin,
          phone: user.phone,
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
server.post("/login", isNotAuthenticated, passport.authenticate("local"), (req, res) => {

  res.send({ user: req.user })
}
);

// Logout
server.get("/logout", isAuthenticated, (req, res) => {
  req.logOut();
  window.localStorage.clear()
  res.send({ message: "You've logged out from your account" });
});

// server.put('/promote/:id', (req, res) => {
//   const { id } = req.params;
//   User.findByPk(id)
//    .then(user => {
//        if (!user.isAdmin){
//         user.update({
//               isAdmin: true
//           })
//       } else {
//         user.update({
//              isAdmin: false
//           })
//       }  
//     })
//     .then(User.findByPk(id)
//     .then(user => res.json(user)))
//     .catch(err => res.json(err))  
// })

server.put('/promote/:id', (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then(user => {
      if (!user.isAdmin) {
       return user.update({
          isAdmin: true
        })
      } else {
      return  user.update({
          isAdmin: false
        })
      }
    })
    .then((json) => res.json(json))
    .catch(err => res.json(err))
})

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
server.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
server.get('/google/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:3001/login' }),
  function (req, res) {
    res.redirect('http://localhost:3000/');
  });
module.exports = server;
