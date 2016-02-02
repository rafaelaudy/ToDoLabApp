var express = require('express');
var app = express();

var router = express.Router();

router.get('/', function (req, res) {
        res.json([{ description: 'Offer this guys a contract', done: false }]);
    });

app.use('/todo', router);

module.exports = app;