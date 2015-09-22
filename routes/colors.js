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


router.get('/colorlist', function(req, res){
    
    var email = 'mer@mer.com';
   var colors = colorService.findColors(email);
   
   res.end(colors);
   
});

router.post('/', function(req, res, next){
  
    var colors = colorService.addColor(req.body, function(err){
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