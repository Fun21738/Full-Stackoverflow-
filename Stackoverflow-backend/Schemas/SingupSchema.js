const joi = require('joi')

const signupSchema= joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    
})

module.exports= signupSchema