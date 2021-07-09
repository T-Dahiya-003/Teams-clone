//passport Authentication
const localStrategy = require("passport-local").Strategy;
// const bcrypt = require('bcryptjs');
const passportAuthenticator = (passport, user) => {
  passport.use(
    new localStrategy(
      { usernameField: "username", passwordField: "password" },
      (username, password, done) => {
        user.findOne({ username: username }, (err, data) => {
          if (err) return done(err);
          if (data) {
            if ((data, password == password)) done(null, data);
            else return done(null, false, { message: "Password Incorrect" });
          } else return done(null, false, { message: "Username Not found" });
        });
      }
    )
  );
  
  passport.serializeUser((data, done) => {
    return done(null, data.id);
  });
  passport.deserializeUser((id, done) => {
    user.findById(id, (err, data) => {
      return done(null, data);
    });
  });
};

module.exports = passportAuthenticator;
// Load User model
// const user = require('../models/user');

// module.exports = function(passport) {
//   passport.use(
//     new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
//       // Match user
//       user.findOne({
//         email: email
//       }).then(user => {
//         if (!user) {
//           return done(null, false, { message: 'That email is not registered' });
//         }

//         // Match password
//         bcrypt.compare(password, user.password, (err, isMatch) => {
//           if (err) throw err;
//           if (isMatch) {
//             return done(null, user);
//           } else {
//             return done(null, false, { message: 'Password incorrect' });
//           }
//         });
//       });
//     })
//   );

//   passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });

//   passport.deserializeUser(function(id, done) {
//     user.findById(id, function(err, user) {
//       done(err, user);
//     });
//   });
// };

