var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res, next){
   res.render('login'); 
});


router.post('/', passport.authenticate('local'), function(req, res, next) {
    console.log(req.body);
    res.redirect('/colors');
});


module.exports = router;