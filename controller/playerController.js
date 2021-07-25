const playerModel = require('../model/player');

async function insertPlayer(player, session) {
    await playerModel.create([player], {session: session});
}

module.exports = { insertPlayer };
