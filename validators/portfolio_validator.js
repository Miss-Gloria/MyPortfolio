import Joi from "joi";

export const contactValidator = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.string().allow('', null).pattern(/^[\d+]{7,15}$/).messages({
    "string.pattern.base": "Phone number must contain only digits or '+'",
  }),
    message: Joi.string().required()
})