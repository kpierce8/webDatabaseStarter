var express = require('express');
var router = express.Router();


router.get('/create', function(req, res, next) {
    var vm = {
        title: "Create a user"
    }
   res.render('/users/create', vm); 
});


module.exports = router;