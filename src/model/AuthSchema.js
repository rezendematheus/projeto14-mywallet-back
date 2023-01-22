import Joi from 'joi'

export const SignUpSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email({maxDomainSegments: 2, tlds:{allow:['com', 'net', 'br']}})
        .required(),
    password: Joi.string()
        .min(6)
        .required(),
    repeat_password: Joi.ref('password')
})

export const SignInSchema = Joi.object({
    email: Joi.string()
        .email({maxDomainSegments: 2, tlds:{allow:['com', 'net', 'br']}})
        .required(),
    password: Joi.string()
        .required()
})