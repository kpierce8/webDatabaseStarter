var Color = require('../models/colors').Color;



exports.addColor = function(color, next) {
        console.log('hit addcolor method');
        var newColor = new Color({
           // email: color.email.toLowerCase(),
            color: color.color
        });


        newColor.save(function(err) {
            if (err) {
                return next(err);
            }
            return next(null);
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