var router = require('express').Router();
var toDoRepository = require('../repositories/toDoRepository');

setUpRoutes();

module.exports = router;

function setUpRoutes () {
    router.get('/', function (req, res) {
        res.json(toDoRepository.get());
    });

    router.get('/numberCompletedGlobally', function (req, res) {
        res.json(toDoRepository.getGlobalTotal());
    });

    router.post('/', function (req, res) {
        res.json(toDoRepository.add(req.body))
    });

    router.put('/:code', function (req, res) {
        req.body.id = req.params.code;
        res.json(toDoRepository.update(req.body));
    });
}