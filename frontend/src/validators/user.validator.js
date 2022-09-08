import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().min(2).max(200).required().messages({
        'string.empty': 'Username has to be provided',
        'string.min': 'Username has to be at least 2 characters long',
        'string.max': 'Username has to be 200 characters long or less'
    }),
    group: Joi.string().required()
})

export {
    userValidator
}