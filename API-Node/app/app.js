var express = require('express');
var app = express();

var todoRoute = require('./routes/toDo');

app.use('/todo', todoRoute);

module.exports = app;