var restify = require('restify'), settings = require('./conf/index'), geraldoLabsApp = require("./lib/index");
var server = restify.createServer({
    name: 'gl-sso',
    version: settings.api.version
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

geraldoLabsApp.bindRoutes(server);
geraldoLabsApp.enableSwagger(server);

server.get(/.*\.(css|html|js|eot|svg|ttf|woff|woff2|png|ico|map|gif)/, restify.serveStatic({
    directory: './public'
}));

//server.get(/\/public\/?.*/, restify.serveStatic({
//    directory: './public'
//}));

server.listen(settings.port, function () {
    console.log('%s listening at %s', server.name, server.url);
});