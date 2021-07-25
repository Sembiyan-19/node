const mongoose = require('../db/db');

const playerSchema = mongoose.Schema({
    Name : String,
	Number : Number,
    Club : String
});

const model = mongoose.model('players', playerSchema);

module.exports = model;