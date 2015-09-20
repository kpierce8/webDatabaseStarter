module.exports = function(res, req, next) {
    if (req) {
        if (req.isAuthenticated()) {
            return next();
        }
        else {
            res.redirect('/');
        }
    }
};