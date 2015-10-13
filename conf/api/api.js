var settings = require("../index");

module.exports = {
    apiVersion: settings.api.version,
    swaggerVersion: '2.1.3',
    swaggerURL: '/api-docs',
    swaggerJSON: '/api-docs.json',
    swaggerUI: './public',
    basePath: settings.protocol + '://' + settings.hostname + ':' + settings.port,
    info: {
        title: settings.api.title,
        description: settings.api.description
    },
    apis: ['./conf/api/endpoints.yml'],
    middleware: function (req, res) {}
};
