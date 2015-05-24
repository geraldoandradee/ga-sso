var express = require('express');
var router = express.Router();

router.all('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var user = req.query.user || req.body.user;
    var email = req.query.email || req.body.email;
    var password = req.query.password || req.body.password;


    res.send(JSON.stringify({"user": user, "email": email, "password": password}));
});

module.exports = router;