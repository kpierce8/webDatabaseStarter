var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res, next){
var d = new Date(Date.now());
    var vm = {
        time: d
    };
    if (req.user) {
        res.redirect('/colors');
    };
   res.render('login', vm); 
});


router.post('/', passport.authenticate('local'), function(req, res, next) {
    console.log(req.body);
    res.redirect('/colors');
});


module.exports = router;