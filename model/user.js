const mongoose = require('../db/db');

const userSchema = mongoose.Schema({
    name : String,
	password : String
});

const model = mongoose.model('users', userSchema);

module.exports = model;