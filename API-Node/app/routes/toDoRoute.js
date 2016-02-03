var router = require('express').Router();
var toDoRepository = require('../repositories/toDoRepository');

router.get('/', function (req, res) {
    res.json(toDoRepository.get());
});

router.get('/numberCompletedGlobally', function (req, res) {
    res.json(toDoRepository.getGlobalTotal());
});

router.post('/', function (req, res) {
    res.json(toDoRepository.add(req.body))
});

router.put('/', function (req, res) {
    res.json(toDoRepository.update(req.body));
});

module.exports = router;