"use strict";
var routes = require("./../conf/routes");
var exceptions = require("./exceptions");

function GeraldoLabsApp() {}

GeraldoLabsApp.prototype = {
    'getController': function (path) {
        try {
            var controller = path.split(".");
            return require("./../controllers/" + controller[0])[controller[1]];
        } catch (e) {
            throw new exceptions.RouterError("Invalid mapping controller or controller not exists", 3);
        }
    },
    'bindRoutes': function (server) {
        if (routes && routes.length > 0) {
            var self = this; // persists a this context
            var i = 0, j = routes.length;
            for (i = 0; i < j; i++) { // more faster
                var route = routes[i];
                if (!route.method || !route.path)
                    throw new exceptions.RouterError("Invalid ROUTE", 2);
                var response = self.getController(route.controller);
                switch (route.method.toUpperCase()) {
                    case "DELETE":
                        server.del(route.path, response);
                        break;
                    case "POST":
                        server.post(route.path, response);
                        break;
                    case "PUT":
                        server.put(route.path, response);
                        break;
                    default:
                        server.get(route.path, response);
                        break;
                }
            }
        } else {
            throw new exceptions.RouterError("Routes not defined", 1);
        }
    },
    'enableSwagger': function (server) {
        var swagger = require('swagger-restify');
        var configApi = require('./../conf/api/api');
        swagger.init(server, configApi);

    }
};

//GeraldoLabsApp.prototype.bindRoutes = ;

//GeraldoLabsApp.prototype.listControllers = function (server) {
//    server.get('/', function sendV1(req, res, next) {
//        res.send('hello: ');
//        return next();
//    });
//};

module.exports = new GeraldoLabsApp();