var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
    var d = new Date(Date.now());
    var vm = {
        title: "A cool title from model",
        meme: "you can't just walk into mordor",
        time: d
    };
   res.render('colors', vm); 
   
});

module.exports = router;