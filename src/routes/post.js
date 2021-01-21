const express = require('express');
const authorization = require('../middlewares/authorization');
const postController = require('../controllers/postController');
const bodyParser = require('body-parser');
const postSchema = require('../schemas/post');
const validation = require('../middlewares/validation');
const router = express.Router();

router.post('/addPost', authorization,
    bodyParser.json(), bodyParser.urlencoded({extended: true}),
    validation(postSchema.addPost, 'body'),
    postController.addPost);

router.post('/addCommetn/:id', authorization,
    validation(postSchema.comentId, 'params'),
    bodyParser.json(), bodyParser.urlencoded({extended: true}),
    validation(postSchema.addComment, 'body'),
    postController.addComment);

router.get('/posts/:page', validation(postSchema.getPostsOnPage, 'params'),
    postController.getSomePosts);

router.delete('/delete/:id', validation(postSchema.postId, 'params'), postController.deletePost);

router.put('/edit/:id', authorization,
    bodyParser.json(), bodyParser.urlencoded({extended: true}),
    validation(postSchema.editPost, 'body'),
    postController.editPost);

module.exports = router;