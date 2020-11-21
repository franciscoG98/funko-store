const server = require('express').Router();
const { User } = require('../db.js');

const bcrypt = require("bcrypt");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
// const session = require("cookie-session");

// server.use(session({ secret: 'DO NOT MAKE THIS PUBLIC!' }));
server.use(passport.initialize());
// server.use(passport.session());



// crea local strategy
passport.use(
  new LocalStrategy(
    // the FIRST parameter is an optional object with options
    {
      // when using the local strategy you MUST name your keys emailField and passwordField
      emailField: "email",
      passwordField: "password",
      passReqToCallback: false
      // passReqToCallback: true
      
      // by default this option is set to false, but when specified to true, the first parameter of the verify callback will be the request object.
      // This is quite useful if you want to see if your application has multiple strategies and you want to see if a user is already logged in with
      // an existing strategy, if they are you can simply associate the new strategy with them (eg. they have put in their username/password, but then
      // try to authenticate again through twitter)
    },
    // the SECOND parameter to the constructor function is known as the verify callback. Since we have set passReqToCallback as true, the first
    // parameter is the request object. The second parameter is the email which comes from user entered data in a form, the third second parameter
    // is the plain text password which comes from user entered data in a form. The fourth parameter is a callback function that will be invoked
    // depending on the result of the verify callback.
    function verifyCallback(req, email, password, done) {


      // find a user in the database based on their username
      db.User.findOne({ email: email }, function(err, user) {
        // if there is an error with the DB connection (NOT related to finding the user successfully or not, return the callback with the error)
        if (err) return done(err);
        // if the user is not found in the database or if the password is not valid, do not return an error (set the first parameter to the done callback as null), but do set the second parameter to be false so that the failureRedirect will be reached.

        // validPassword is a method WE have to create for every object created from our Mongoose model (we call these instance methods or "methods" in Mongoose)
        if (!user || !user.validPassword(password)) {
          return done(null, false);
        }
        // if the user has put in the correct username and password, move onto the next step and serialize! Pass into the serialization function as the first parameter the user who was successfull found (we will need it's id to store in the session and cookie)
        return done(null, user);
      });
    }
  )
);

// this code is ONLY run if the verify callback returns the done callback with no errors and a truthy value as the second parameter. This code only runs once per session and runs a callback function which we can assume will not have any errors (null as the first parameter) and the data we want to put in the session (only the user.id). The successCallback is run next!
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// once a user has been authenticated and serialized, we now find that user in the database on every request. This allows passport to have some useful methods on the request object like req.user (the current user logged in) and req.isAuthenticated() (returns true if the user is logged in or false if not)
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
// -------------------


server.post("/login", (req, res, next) => {

  

  db.User.create(req.body.user).then(

      // PASSWORD HASH ¿va aca?
      console.log('email:\n', email, '\npass:\n', password, '\n user:\n', user),
      
      user => {
        // jump straight to the serialization process using req.logIn()
        req.logIn(user, err => {
          // return res.redirect(`/users/${user.id}`);
          return res.redirect(`/login`);

        });
      },
      err => {
        return next(err);
      }
    );
  });
  

module.exports = server;


// // POST /auth/login
// ---------------------------------------------------------------------------------
// const server = require('express').Router();
// const passport = require("passport");
// // const { User } = require('../db.js');

// const cookieParser = require('cookie-parser'); // instalar
// const session = require('express-session'); // instalar
// const PassportLocal = require('passport-local').Strategy;

// server.use(express.urlEncoded({extended:true})); // ni idea

// server.use(cookieParser('mi secretis'));
// // config session
// server.use(session({
//   secret:'mi secretis',

//   resave: true,
//   saveUninitialized: true
// })),

// // config passport
// server.use(passport.initialize());
// server.use(passport.session());

// // estrategia inicio de session---> npm install passport-local
// passport.use(new PassportLocal((email, password, done) => {

//   if( email === 'laConchaDeTuHermana@passportde.mierda' && password === 'sorete')
// }))




// server.get('/', (req,res) => {
//   // si ya iniciamos mostrar bienvenida
//   res.send('hola culiado')

//   // si no iniciamos redirecciona a login
// })

// server.get('/login', (req,res) => {
//   // mostrar form de login
//   res.render('login');
// })

// server.post('/login', (req,res) => {
//   // recibir credenciales de sesion
//   res.send('hola culiado')
// })