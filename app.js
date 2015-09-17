var express = require('express');
var http = require('http');

var app = express();


app.get('/', function(req, res, next){
   res.send("i'm waiting for something to do"); 
});


app.listen(process.env.PORT ||3100);

console.log('started up on');