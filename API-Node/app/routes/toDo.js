var router = require('express').Router();

var toDos = [{ id: 1, description: 'Offer this guys a contract', done: false }];
var id = 1;

router.get('/', function (req, res) {
    res.json(toDos);
});

router.get('/numberCompletedGlobally', function (req, res) {
    res.json(toDos.length + 9999);
});

router.post('/', function (req, res) {
    id++;
    toDos.push({ id: id, description: 'Offer this guys a contract', done: false });
    res.json('not implemented')
});

router.put('/', function (req, res) {
    res.json('not implemented');
});

module.exports = router;