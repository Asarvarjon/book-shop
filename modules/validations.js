const Joi = require('joi');

module.exports = {
    RegisterValidation: Joi.object({
        name: Joi.string().min(3).max(16).required(),
        email: Joi.string().email().required().lowercase(),
        password: Joi.string().min(4).required().error(new Error("Password is invalid")),
        phone: Joi.number().required().error(new Error("Number is invalid"))
    }),

    LoginValidation: Joi.object({
        email: Joi.string().email().required().lowercase(),
        password:Joi.string().min(4).required().error(new Error("Password is invalid")),
    })
}