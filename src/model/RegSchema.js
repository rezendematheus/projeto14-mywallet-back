import Joi from "joi";

export const regSchema = Joi.object({
    description: Joi.string()
        .min(3)
        .required(),
    value: Joi.number()
        .required(),
    type: Joi.string()
        .valid("income","outgoing")
        .required()
})