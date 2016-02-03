var express = require('express');
var app = express();

var toDoRoute = require('./routes/toDo');

app.use('/todo', toDoRoute);

module.exports = app;