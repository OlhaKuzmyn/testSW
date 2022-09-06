import Joi from "joi";

const groupValidator = Joi.object({
    name: Joi.string().min(2).max(200).required().messages({
        'string.empty': 'Name has to be provided',
        'string.min': 'Name has to be at least 2 characters long',
        'string.max': 'Name has to be 200 characters long or less'
    }),
    description: Joi.string().max(2000).required().messages({
        'string.empty': 'Description has to be provided',
        'string.max': 'Name has to be 2000 characters long or less'
    })
})

export {
    groupValidator
}