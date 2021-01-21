const postService = require('../services/post');

module.exports = {
    async addPost(req, res, next) {
        try {
            const {title, text} = req.body;
            const id = await postService.getTheLastId() + 1;
            await postService.savePost({title, text, id, login: req.user.login, userId: req.user.id, comments: []});
            res.status(201).json({message: 'The post has been successfylly added', id});
        } catch (err) {
            next(err);
        }
    },

    async addComment(req, res, next) {
        try {
            const {id} = req.params;

            const {text, login} = req.body;

            const result = await postService.addComment(id, {text, login});

            if(result.result.nModified === 0) throw new Error('The comment has not been added!');

            res.json({message: 'The comment has been added successfully'});

        } catch (err) {
            next(err);
        }
    },

    async getSomePosts(req, res, next) {
        try {
            const {page} = req.params;

            const result = await postService.getPostsOnPage(page);

            res.json(result.reverse());
        } catch (err) {
            next(err);
        }
    },

    async deletePost(req, res, next) {
        try {
            const {id} = req.params;

            const result = await postService.deletePostWithId(id);

            res.json({message: 'The post has been deleted successfully!'});
        } catch (err) {
            next(err);
        }
    },

    async editPost(req, res, next) {
        try {
            const {id} = req.params;

            const {text, title} = req.body;

            const result = await postService.editPostWithId(id,  {text, title});

            res.json({message: 'The post has been edited successfully!'});
        } catch (err) {
            next(err);
        }
    }
}