module.exports = function() {
  var passport = require('passport'); //definitely a different pattern here requiring within a top level function
  var passportLocal = require('passport-local');
  var userService = require('../services/user-service');
  
  passport.use(new passportLocal.Strategy({usernameField: 'email'}, function( email, password, next){
      console.log("authentication started");
      userService.findUser(email, function(err, user){
          if (err) {
              return next(err);
          }
          if(!user || user.password !== password) {
              return next(null, null);
          }
          next(null, user);
      });
  }));
    
    
passport.serializeUser(function(user, next) {
    next(null, user.email);
});

passport.deserializeUser(function(email, next) {
    userService.findUser(email, function(err, user){
        next(err, user);
       });
   });
};