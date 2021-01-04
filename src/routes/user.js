const express = require('express');
const userController = require('../controllers/userController');
const bodyParser = require('body-parser');
const userSchema = require('../schemas/user');
const validation = require('../middlewares/validation');
const router = express.Router();

router.post('/registration', bodyParser.urlencoded({extended: true}),
    validation(userSchema.registration, 'body'),
    userController.register);

router.post('/login', bodyParser.urlencoded({extended: true}),
    validation(userSchema.login, 'body'),
    userController.login);

module.exports = router;
