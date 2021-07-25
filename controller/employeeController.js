const employeeModel = require('../model/employee');

async function insertEmployee(employee, session) {
    await employeeModel.create([employee], {session: session});
    console.log("in emp model");
    return session;
}

module.exports = { insertEmployee };
