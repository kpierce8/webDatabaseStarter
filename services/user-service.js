var User = require('../models/users').User;
var bcrypt = require('bcrypt');


exports.addUser = function(user, next) {
    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) {
            return next(err);
        }


        var newUser = new User({
            email: user.email.toLowerCase(),
            password: hash
        });


        newUser.save(function(err) {
            if (err) {
                return next(err);
            }
            return next(null);
        });
    });


};
// added to check for existing user during create account  
exports.findUser = function(email, next) {
    User.findOne({
        email: email.toLowerCase()
    }, function(err, user) {
        next(err, user);
    });

};