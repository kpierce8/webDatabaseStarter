var express = require('express');
var router = express.Router();
var colorService = require('../services/color-service');

router.get('/', function(req, res, next){
    var d = new Date(Date.now());
    var vm = {
        title: "A cool title from model",
        meme: "you can't just walk into mordor",
        name: req.user ? req.user.email : null,
        time: d
    };
    console.log(vm);
    if(!req.user){
        res.redirect('/');
    }
   res.render('colors', vm); 
   
});


router.get('/colorlist', function(req, res, next){
   colorService.findColors(req, res, next);
});


router.get('/coloruserlist', function(req, res, next){
    var email = 'mer@mer.com';
    req.params['email'] = email;
   colorService.findUserColors(req, res, next);
});




router.post('/', function(req, res, next){
  
    var colors = colorService.addColor(req.body, res, function(err){
    if (err) {
        console.log(err);
         var vm = {
        title: "Create a user",
        input: req.body,
        error: err
        };
    }
    console.log('almost there');
     }); 
     
     var vm = {
        title: "A cool title from model",
        meme: "you can't just walk into mordor",
        name: req.user ? req.user.email : null,
        colors: colors
    };
    return res.render('colors', vm); 
   
});

module.exports = router;