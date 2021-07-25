var nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const userModel = require('../model/user')

function authUser(req, res, next) {
    console.log(req.session.token);
    jwt.verify(req.session.token, 'thisIsSecretKey', (err, data) => {
        if (err) {
            throw err;
        }
        next();
    })
}

function login(req, res) {
    const userName = req.body.name;
    const password = req.body.password;
    const result = userModel.findOne({name: userName}, function(err, data) {
        if (err) {
            console.log("some error occured");
        } else {
            if (null === data) {
                res.json({status : 'error', Message : 'User does not exist'});
            } else {
                if (password === data.password) {
                    req.session.token = jwt.sign({ name : req.body.name }, 'thisIsSecretKey');
                    console.log(req.session.token);
                    res.json({status : 'ok', Message : 'success'});
                } else {
                    res.json({status : 'error', Message : 'incorrect password'})
                }
            }
        }
    });
}

function sendMail(req, res) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: currentuser,
          pass: CurrentPassword
        }
      });
      
      var mailOptions = {
        from: currentuser,
        to: 'sembiyancr7@gmail.com',
        cc: 'sembiyanofficial@gmail.com',
        subject: 'with login',
        text: 'That was easy!'
      };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            res.send('Email sent: ' + info.response);
        }
    })
}

function getUser(req, res) {
    const result = userModel.find(function(err, data) {
        if (err) {
            console.log("sonme error");
        } else {
            res.send(data);
        }
    });
}

function logout(req, res) {
    req.session.destroy();
    res.send("session destroyed")
}

function create(req, res) {
    const user = {
                    name : req.body.name,
                    password : req.body.password
                }
    console.log(user);
    userModel.create(user, function(err, db) {
        if(err) throw err;
    });
    res.json({status: "ok"})
}

function check(req, res) {
    res.send("siiiiiiii");
}


module.exports = { login, getUser, logout, create, check, authUser, sendMail };