const express = require('express');
const userController = require('../controllers/userController');
const bodyParser = require('body-parser');
const router = express.Router();

router.post('/registration', bodyParser.urlencoded({extended: true}), userController.register);

router.post('/login', bodyParser.urlencoded({extended: true}), userController.login);

module.exports = router;
