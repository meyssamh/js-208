var express       = require('express');
var logger        = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./auth/jrs')(app);
require('./db/db');
require('./routes')(app);
require('./Error/errors')(app);


module.exports = app;
