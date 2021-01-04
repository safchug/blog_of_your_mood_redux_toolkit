const Joi = require('joi');

const user = {
    registration: Joi.object({
        name: Joi.string().required(),
        login: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required(),
        birthday: Joi.string().required(),
    }),
    login: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()}
    )

}

module.exports = user;

