var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({"app": "GA-CAS 0.1.0"}));
});

module.exports = router;
