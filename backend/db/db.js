var mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/js_208');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = mongoose;