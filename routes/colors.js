var express = require('express');
var router = express.Router();


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

module.exports = router;