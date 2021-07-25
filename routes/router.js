const express = require("express");
const router  = express.Router();
const appService = require('../service/appService');
const reader = require('../service/reader');
const userService = require('../service/userService')

router.post('/insert', appService.insertAll);
router.get('/readExcel', reader.excelReader);
router.post('/login', userService.login);
router.get('/getUser', userService.getUser);
router.get('/logout', userService.logout);
router.post('/create', userService.create);
router.get('/check', userService.authUser, userService.check);
router.get('/send', userService.authUser, userService.sendMail);

module.exports = router;