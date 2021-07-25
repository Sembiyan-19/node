const express = require("express");
const routes = require('./routes/router');
const session = require('express-session');
const mongoSession = require('connect-mongodb-session')(session);
const app = express();

const store = new mongoSession({
    uri: 'mongodb://localhost:2525/test?replicaSet=repSet',
    collection: 'mySessions'
})

app.use(express.json());
app.use(session({
    secret: "thisIsSecret",
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: { maxAge: 100000 }
}))
app.use('/', routes);

app.listen(8000,(req, res) =>{
    console.log("server is up and running in 8000")
})


