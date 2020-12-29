const postService = require('../services/post');

module.exports = {
    async addPost(req, res, next) {
        try {
            const {title, text} = req.body;
            const id = await postService.getTheLastId() + 1;
            await postService.savePost({title, text, id, userId: req.user.id, comments: []});
            res.status(201).json({message: 'The post has been successfylly added'});
        } catch (err) {
            next(err);
        }
    },

    async addCommetn(req, res, next) {
        try {
            const {id} = req.params;

            console.log(id);

            const {text, login} = req.body;

            const result = await postService.addComment(id, {text, login});

            if(result.result.nModified === 0) throw new Error('The comment has not been added!');

            res.json({message: 'The comment has been added successfully'});

        } catch (err) {
            next(err);
        }
    }
}