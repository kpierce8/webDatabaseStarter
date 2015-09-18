var express = require('express');
//var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var expressSession = require('express-session');

var config = require('./config');
var colors = require('./routes/colors');
var routes = require('./routes/index');
var users = require('./routes/users');

var passportConfig = require('./auth/passport-config');
passportConfig();

mongoose.connect(config.mongoUri);

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(expressSession(
    {
        secret: 'some string',
        saveUninitialized: false,
        resave: false
    }
));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/users', users);
app.use('/colors', colors);

var server = app.listen(process.env.PORT ||3100, function(){
    console.log('started up on');
});

