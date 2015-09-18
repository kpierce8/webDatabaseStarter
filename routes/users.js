var express = require('express');
var router = express.Router();
var userService = require('../services/user-service');
var passport = require('passport');

router.get('/create', function(req, res, next) {
    var vm = {
        title: "Create a user"
    };
   res.render('users/create', vm); 
});

router.post('/create', function(req, res, next) {
userService.AddUser(req.body, function(err){
    if (err) {
        console.log(err);
         var vm = {
        title: "Create a user",
        input: req.body,
        error: err
    };
    delete vm.input.password;
    return res.render('users/create', vm); 
    }
   
   res.redirect('/colors');
  });
});

router.post('/login', passport.authenticate('local'), function(req, res, next) {
    res.redirect('/colors');
});


module.exports = router;