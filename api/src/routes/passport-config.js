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

          console.log('pass que llega del front:\n',password, '\n user pass de DB:\n',user.password);

          bcrypt.compare(password, user.password, function(err, res) {
            if (err){
              console.log('le has mandado cualquier pass ura mira:\n',password);
              // res.json({success: false, message: 'passwords do not match'});
              res.json({message: 'passwords do not match'})
            }
            else if(res) {
              
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
            } 
          })
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

