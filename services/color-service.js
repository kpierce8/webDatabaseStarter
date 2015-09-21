var Color = require('../models/colors').Color;

var  findColors = function(email) {
    Color.find({
        email: email.toLowerCase()
    }, function(err, colors) {
        if (err) {
            console.log(err);
        }
        console.log(colors);
        return colors;
    });
};

exports.addColor = function(color, next) {
        console.log('hit addcolor method');
        var newColor = new Color({
            email: color.email.toLowerCase(),
            color: color.color
        });


        newColor.save(function(err) {
            if (err) {
                return next(err);
            }
            console.log('now what?');
            return findColors(color.email);
            //return;
        });
};
// added to check for existing user during create account  
exports.findColors = function(email, next) {
   Color.find({
        email: email.toLowerCase()
    }, function(err, colors) {
        next(err, colors);
        console.log(colors);
    });
    
};