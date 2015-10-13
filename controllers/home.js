var settings = require("./../conf/index");
module.exports.respond = function (req, res, next) {
    res.send({'api': settings.api.version, 'name': settings.api.name, 'description': settings.api.description});
    next();
};