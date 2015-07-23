var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    name: String,
    email: String,
    password: String,

    created_at: {type: Date},
    updated_at: {type: Date},
    hidden: Boolean
});