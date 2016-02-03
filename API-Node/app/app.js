var express = require('express');
var app = express();

var toDoRoute = require('./routes/toDoRoute');

app.use('/todo', toDoRoute);

module.exports = app;