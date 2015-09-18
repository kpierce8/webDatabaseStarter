var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res, next){
   res.render('index'); 
});


router.post('/login', passport.authenticate('local'), function(req, res, next) {
    res.redirect('/colors');
});


module.exports = router;