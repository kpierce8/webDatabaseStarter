var express = require('express');
var router = express.Router();
var userService = require('../services/user-service');

router.get('/create', function(req, res, next) {
    var vm = {
        title: "Create a user"
    };
   res.render('users/create', vm); 
});

router.post('/create', function(req, res, next) {
userService.addUser(req.body, function(err){
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
   
   res.redirect('../colors');
  });
});

router.get('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
});


module.exports = router;