var env = process.env.ENVIRONMENT;
var settings;

if (env) {
    settings = require("./" + env);
} else {
    settings = require("./prod");
}

settings['api'] = {
    'version': "0.1.0",
    'name': "gl-sso",
    'title': "Single Sign On - API Doc",
    'description': "GeraldoLabs - Single Sign On - (sso) authentication system. "
};

module.exports = settings;