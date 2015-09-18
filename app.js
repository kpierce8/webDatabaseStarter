var express = require('express');
var http = require('http');
var path = require('path');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');





app.use('/', routes);
app.use('/users', users)


var server = app.listen(process.env.PORT ||3100, function(){
    console.log('started up on');
});

