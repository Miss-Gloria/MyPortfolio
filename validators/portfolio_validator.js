import Joi from "joi";

export const contactValidator = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.number().required(),
    message: Joi.string().required()
})