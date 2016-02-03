var router = require('express').Router();

router.get('/', function (req, res) {
    res.json([{ description: 'Offer this guys a contract', done: false }]);
});

module.exports = router;