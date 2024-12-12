import Joi from "joi"

const userValidation = Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    confirmEmail: Joi.boolean(),
    password: Joi.string().min(6).required()
})

export default userValidation