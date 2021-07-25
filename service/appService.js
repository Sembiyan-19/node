//const db = require('../lib/');
const mongoose = require('../db/db');
const userController = require('../controller/userController');
const employeeController = require('../controller/employeeController');
const playerController = require('../controller/playerController');
const playerModel = require('../model/player');
const userModel = require('../model/user');

async function insertAll(req, res) {
    let user = {
        name : req.body.userName,
        password : req.body.password
    }
    let player = {
        Name : req.body.name,
        Number : req.body.number,
        Club : req.body.club
    }
    let employee = {
        name : req.body.empName,
        salary : req.body.salary,
        role : req.body.role
    }
    let session = await mongoose.startSession();
    try {
        session.startTransaction();
        await userController.insertUser(user, session);
        await playerController.insertPlayer(player, session);
        await employeeController.insertEmployee(employee, session);
        await session.commitTransaction();        
        res.send("success");
    } catch (error) {
        await session.abortTransaction();
        console.log(error);
        res.send("failed");
    }
    session.endSession();
}

module.exports = { insertAll };