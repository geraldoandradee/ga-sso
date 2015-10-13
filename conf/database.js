var settings = require("./index");

var caminte = require('caminte'),
    Schema = caminte.Schema,
    config = {
        driver: settings.database.driver,
        host: settings.database.host,
        port: settings.database.port,
        username: settings.database.user,
        password: settings.database.password,
        database: settings.database.database,
        pool: settings.database.pool
    };

module.exports = new Schema(config.driver, config);