// const Joi = require("joi");

// const schema = Joi.object({
//       name: Joi.string()
//             .required(),
//       email: Joi.string()
//             .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
//       ,
//       username: Joi.string()
//             .alphanum()
//             .min(3)
//             .max(50),
//       access_token: Joi.string(),
//       password: Joi.string()
//             .required(),
//       confirm_password: Joi.ref('password'),


// }).with('name', 'username')
//       .xor('email', 'access_token')



// module.exports = {
//       validateSchema: (data) => {
//             return schema.validate(data)
            
//       }
// }