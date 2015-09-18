var express = require('express');
var router = express.Router();


router.get('/create', function(req, res, next) {
    var vm = {
        title: "Create a user"
    };
   res.render('users/create', vm); 
});

router.post('/create', function(req, res, next) {
    var somethingGoesWrong = true;
    if (somethingGoesWrong) {
         var vm = {
        title: "Create a user",
        input: req.body,
        error: 'something went wrong'
    };
    delete vm.input.password;
    return res.render('users/create', vm); 
    }
   
   res.redirect('../other');
});


module.exports = router;