import Joi from "joi"

const taskValidation = Joi.object().keys({
    title: Joi.string().min(3).max(30).required(),
    description: Joi.string().required(),
    status: Joi.string(),
    user: Joi.string()
})

export default taskValidation