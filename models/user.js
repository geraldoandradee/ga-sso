var schema = require("../conf/database");

schema.define('User', {
    name: {type: schema.String, "null": false},
    email: {type: schema.String, "null": false},
    updated: {type: schema.Date, default: null},
    created: {type: schema.Date, default: Date.now},
    active: {type: schema.Boolean, default: 1}
}, {
    primaryKeys: ["email"],
    indexes: {
        idx_1: {
            columns: 'email, active'
        }
    }
});
