var express = require('express');
//var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var expressSession = require('express-session');
var connectMongo = require('connect-mongo');
var config = require('./config');
var colors = require('./routes/colors');
var routes = require('./routes/index');
var users = require('./routes/users');

var MongoStore = connectMongo(expressSession);

var passportConfig = require('./auth/passport-config');
var restrict = require('./auth/restrict');
passportConfig();

mongoose.connect(config.mongoUri);

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());
app.use('/public', express.static(__dirname + '/public'));
//app.use('/public', express.static(path.join(__dirname, 'public')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(expressSession(
    {
        secret: 'some string',
        saveUninitialized: false,
        resave: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection  })
        
    }
));

app.use(passport.initialize());
app.use(passport.session());


app.use('/', routes);
app.use('/users', users);
//app.use(restrict);
app.use('/colors', colors);

app.use(function(req, res){

 var vm = {
        title: "A cool title from model",
        name: req.user ? req.user.email : null,
        colors: req.colors2
    };
   // console.log("color count is " + req.colors2.length); 
    return res.render('colors', vm); 
  


});

var server = app.listen(process.env.PORT ||3100, function(){
    console.log('started up on');
});

