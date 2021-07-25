const userModel = require('../model/user');

async function insertUser(user, session) {
    await userModel.create([user], {session: session});
}

module.exports = { insertUser };
