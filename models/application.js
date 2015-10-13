var schema = require("../conf/database");

schema.define('Application', {
    id: {type: schema.String, "null": false},
    name: {type: schema.String, "null": false},

    whitelabel: {type: schema.Boolean, default: 0},

    updated: {type: schema.Date, default: null},
    created: {type: schema.Date, default: Date.now},
    active: {type: schema.Boolean, default: 1}
}, {
    primaryKeys: ["id"]
});
