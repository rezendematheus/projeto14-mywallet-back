import Joi from "joi";
const schema = Joi;
export const regSchema = Joi.object({
    date: Joi
        .string()
        .required(),
    description: Joi.string()
        .min(3)
        .required(),
    value: Joi.number()
        .required(),
    type: Joi.string()
        .valid("income","outgoing")
        .required()
})