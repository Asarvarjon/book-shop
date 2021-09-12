const Joi = require('joi');

module.exports = {
    RegisterValidation: Joi.object({
        name: Joi.string().min(3).max(16).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).required(),
        phone: Joi.number().required()
    })
}