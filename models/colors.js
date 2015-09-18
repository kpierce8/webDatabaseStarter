var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var colorSchema = new Schema ({
    email: String,
    color: String,
    createdDate: {type: Date, default: Date.now}
});

var Colors = mongoose.model('User', colorSchema);

module.exports = {
    Colors: Colors
};