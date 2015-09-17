var express = require('express');
var http = require('http');
var path = require('path');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



app.get('/', function(req, res, next){
   res.send("i'm waiting for something to do"); 
});

app.get('/other', function(req, res, next){
    var vm = {
        title: "A cool title from model",
        meme: "you can't just walk into mordor"
    };
   res.render('index', vm); 
   
});



var server = app.listen(process.env.PORT ||3100, function(){
    console.log('started up on');
});

