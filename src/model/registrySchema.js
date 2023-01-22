import Joi from "joi";

export const registrySchema = Joi.object({
    description: Joi.string()
        .min(3)
        .required(),
    value: Joi.number()
        .required(),
    type: Joi.string()
        .allow("outgoing", "income")
        .required()
})