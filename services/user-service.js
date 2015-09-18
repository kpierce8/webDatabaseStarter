var User = require('../models/users').User;



exports.AddUser = function(user, next) {
  var newUser = new User({
     email: user.email.toLowerCase(),
     password: user.password
  });  


newUser.save(function(err){
   if (err) {
       return next(err);
   }
   return next(null);
});
};
// added to check for existing user during create account  
exports.findUser = function(email, next) {
    User.findOne({email: email.toLowerCase()}, function(err, user) {
     next(err, user);
    });

};