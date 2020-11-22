// const LocalStrategy = require("passport-local").Strategy;
// const bcrypt = require("bcrypt");

// // passReqToCallback lo puedo cambiar por: authenticateUser

// const initialize = (passport, getUserByEmail) => {

//     const authenticateUser = async (email, password, done) => {

//         const user = getUserByEmail(email) // funcion que vamos a crear despues

//         if (user === null){
//             return done(null, false, {message: "Sorry, there's not any user with that email, try again"})
//         }

//         try {
//             if(await bcrypt.compare(password, user.password )) {
//                 return done(null, user)
//             } else {
//                 return done(null, false, { message: 'Passsword incorrect, try again' })
//             }
//         } catch (e) {
//             return done(e)
//         }

//     }

//     // crea local strategy
//     passport.use(
//         new LocalStrategy(
//         // the FIRST parameter is an optional object with options
//             {
//                 // when using the local strategy you MUST name your keys emailField and passwordField
//                 usernameField: "email",
//                 // passwordField: "password",

//                 // passReqToCallback: false
//                 // passReqToCallback: true
                
//                 // by default this option is set to false, but when specified to true, the first parameter of the verify callback will be the request object.
//                 // This is quite useful if you want to see if your application has multiple strategies and you want to see if a user is already logged in with
//                 // an existing strategy, if they are you can simply associate the new strategy with them (eg. they have put in their username/password, but then
//                 // try to authenticate again through twitter)
//             }, authenticateUser

//             // the SECOND parameter to the constructor function is known as the verify callback. Since we have set passReqToCallback as true, the first
//             // parameter is the request object. The second parameter is the email which comes from user entered data in a form, the third second parameter
//             // is the plain text password which comes from user entered data in a form. The fourth parameter is a callback function that will be invoked
//             // depending on the result of the verify callback.

//             // --------------------
//             // esta funcion la reemplazo con la del tuto
//             // function verifyCallback(req, email, password, done) {
        
//             //     console.log('en el verify call back pa email: \n', email, '\n pass, \n', password);
        
        
//             //     // find a user in the database based on their email
//             //     db.User.findOne({ email: email }, function(err, user) {
//             //     // if there is an error with the DB connection (NOT related to finding the user successfully or not, return the callback with the error)
//             //     if (err) return done(err);
//             //     // if the user is not found in the database or if the password is not valid, do not return an error (set the first parameter to the done
//             //     // callback as null), but do set the second parameter to be false so that the failureRedirect will be reached.
        
//             //     // validPassword is a method WE have to create for every object created from our Mongoose model (we call these instance methods or
//             //     // "methods" in Mongoose)

//             //     if (!user || !user.validPassword(password)) {
//             //         return done(null, false);
//             //     }

//             //     // if the user has put in the correct username and password, move onto the next step and serialize! Pass into the serialization function
//             //     // as the first parameter the user who was successfull found (we will need it's id to store in the session and cookie)
//             //     return done(null, user);
//             //     });
//             // }
//         )
//     );

//     // this code is ONLY run if the verify callback returns the done callback with no errors and a truthy value as the second parameter. This code
//     // only runs once per session and runs a callback function which we can assume will not have any errors (null as the first parameter) and the
//     // data we want to put in the session (only the user.id). The successCallback is run next!
//     passport.serializeUser((user, done) => {
//         done(null, user.id);
//     });
//     // once a user has been authenticated and serialized, we now find that user in the database on every request. This allows passport to have some
//     // useful methods on the request object like req.user (the current user logged in) and req.isAuthenticated() (returns true if the user is logged
//     // in or false if not)

//     passport.deserializeUser((id, done) => {
//         User.findById(id, (err, user) => {
//             done(err, user); // ojota lo que hace aca no se si no hay que pasarle el objeto User a la funcion no se que mierda se la paso aca arriba
//             //  y no se ni idea me hinche las pelotas ya min 28
//         });
//     });

// }

// module.exports = initialize;


// function isAuthenticated(req, res, next) {
//     if(req.isAuthenticated())
//       return next();
//     else
//       return res.status(401).send();
//   }
    
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
    // isAuthenticated,
    isNotAuthenticated
    // ,
    // isAdmin,
    // isNotAdmin
}

