var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { User } = require('../db.js');

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: '761928378476-vjdki2n1rde6q99eqc1kn56o87a5qgn3.apps.googleusercontent.com',
    clientSecret: 'H8v8S-VDhu9vRy5-xat9yMm0',
    callbackURL: "http://localhost:3001/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        // console.log(profile)
        return User.findOne({
            where: {
                email: profile.emails[0].value,
            }
        })
            .then(user => {
                // console.log(profile)
                if (!user) {
                    return User.create({

                        googleId: profile.id,
                        username: profile.name.givenName,
                        fullname: profile.displayName,
                        email: profile.emails[0].value,
                        password: 'esto me tiene harta',
                        image: profile.photos[0].value

                    })
                }
            })
            .then(user2 => {
                done(null, user2)
            })
            .catch(err => {
                console.log(err)
                done(err, null)
            })
    })

)

