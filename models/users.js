var mongoose = require('mongoose');
var userService = require('../services/user-service');


var Schema = mongoose.Schema;

var userSchema = new Schema ({
    email: {type:String, required: "Enter your email"},
    password: {type: String, required: "Password would be good here"},
    created: {type: Date, default: Date.now}
});


userSchema.path('email').validate(function(value, next) {
    userService.findUser(value, function(err, user) {
        if (err) {
            console.log(err);
            return next(false);
        }
        next(!user);
    });
}, 'That email is already there!');

var User = mongoose.model('User', userSchema);

module.exports = {
    User: User
};