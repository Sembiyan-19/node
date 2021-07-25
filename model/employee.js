const mongoose = require('../db/db');

const employeeSchema = mongoose.Schema({
    name : {type: String, unique: true},
	salary : Number,
    role : String
});

const model = mongoose.model('employees', employeeSchema);

module.exports = model;