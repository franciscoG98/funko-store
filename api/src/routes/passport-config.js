const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { User } = require('../db.js');


passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      (email, password, done) => {
        User.findOne({
          where: {
            email: email,
          }
        })
        .then((user) => {
          if (user) {
            if (bcrypt.compare(password, user.password )) {
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
              return done(new Error("Password incorrect"));
            }
          } else {
            return done(new Error("User not found"), null);
          }
        })
        .catch((err) => {
          console.error(err);
          return done(new Error("Internal error"), null);
        });
    }
))


function isAuthenticated(req, res, next) {
    if(req.isAuthenticated())
      return next();
    else
      return res.status(401).send();
  }
    
function isNotAuthenticated(req, res, next) {
    if(!req.isAuthenticated())
    return next();
    else
    return res.status(401).send();
}

// function isAdmin(req, res, next) {
//     if((req.body.adminKey && req.body.adminKey === process.env.ADMIN_KEY) || (req.user && req.user.rol === "admin")) {
//     return next();
//     } else {
//     return res.status(401).send();
//     }
// }

// function isNotAdmin(req, res, next) {
//     if(!!req.user === false || req.user.rol !== "admin") {
//     return next;
//     } else {
//     return res.status(401).send();
//     }
// }

module.exports = {
    isAuthenticated,
    isNotAuthenticated
    // ,
    // isAdmin,
    // isNotAdmin
}

