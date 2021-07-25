const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:2525/test?replicaSet=repSet', { useFindAndModify: false }, {useNewUrlParser: true});

module.exports = mongoose;