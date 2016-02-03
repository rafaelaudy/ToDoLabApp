var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var toDoRoute = require('./routes/toDoRoute');

app.use(bodyParser.json());

app.use('/todo', toDoRoute);

module.exports = app;