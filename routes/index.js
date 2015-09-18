var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
   res.send("i'm waiting for something to do"); 
});

router.get('/other', function(req, res, next){
    var d = new Date(Date.now());
    var vm = {
        title: "A cool title from model",
        meme: "you can't just walk into mordor",
        time: d
    };
   res.render('index', vm); 
   
});

module.exports = router;