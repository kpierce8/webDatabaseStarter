var User = require('../models/users').User;



exports.AddUser = function(user, next) {
  var newUser = new User({
     email: user.email,
     password: user.password
  });  
  
newUser.save(function(err){
   if (err) {
       return next(err);
   }
   return next(null);
});
  
};