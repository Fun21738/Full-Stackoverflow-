const joi =require('joi')

const LoginSchema = joi.object({
    // usernam: joi.string().required(),
    email: joi.string().email().required(),
    passwor : joi.string().required(),
})
module.exports= LoginSchema