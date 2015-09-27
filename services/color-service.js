var Color = require('../models/colors').Color;


exports.addColor = function(color, res, next) {
        console.log('hit addcolor method');
        var newColor = new Color({
            email: color.email.toLowerCase(),
            color: color.color
        });

        newColor.save(function(err) {
            if (err) {
                return next(err);
            }
            res.redirect('../colors');
        });
};


exports.findUserColors = function(req, res, next) {
        if (req.params) {  console.log(req.params); }
       
        Color.find({email: req.user.email},
        function(err, colors) {
            if (!err) {
               req['colors2']=colors;
               next();
            }
    });
};

exports.findColors = function(req, res, next) {
        Color.find({},
        function(err, colors) {
            if (!err) {
               req['colors2']=colors;
               next();
            }
    });
};