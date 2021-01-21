const Joi = require('joi');

const post = {
    addPost: Joi.object({
        title: Joi.string().required(),
        text: Joi.string().required()
    }),
    addComment: Joi.object({
        text: Joi.string().required(),
        login: Joi.string().required()
    }),
    comentId: Joi.object({
        id: Joi.number().required().min(1)
    }),
    getPostsOnPage: Joi.object({
        page: Joi.number().required().min(1)
    }),
    postId: Joi.object({
        id: Joi.number().required().min(1)
    }),
    editPost: Joi.object({
        title: Joi.string().required(),
        text: Joi.string().required()
    }),
}

module.exports = post;