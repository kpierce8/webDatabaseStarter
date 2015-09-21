var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var colorSchema = new Schema ({
    email: String,
    color: String,
    createdDate: {type: Date, default: Date.now}
});

var Color = mongoose.model('Color', colorSchema);

module.exports = {
    Color: Color
};