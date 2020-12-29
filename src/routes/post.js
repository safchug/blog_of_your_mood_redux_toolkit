const express = require('express');
const authorization = require('../middlewares/authorization');
const postController = require('../controllers/postController');
const bodyParser = require('body-parser');
const router = express.Router();

router.post('/addPost', authorization, bodyParser.urlencoded({extended: true}), postController.addPost);
router.post('/addCommetn/:id', authorization, bodyParser.urlencoded({extended: true}), postController.addCommetn);

module.exports = router;