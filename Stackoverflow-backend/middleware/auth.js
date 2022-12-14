const jwt = require('jsonwebtoken')

const auth= (req, res, next)=>{
    try {
        //request the token from the headers
        const bearer = req.headers['authorization']
    
        if(!bearer) {
            return res.status(404).send({message: "Access denied"})
        }
        //stored as an array the 2nd number is the token
        const token = bearer.split(" ")[1]
    
//verifyin the token
        const {id, email}= jwt.verify(token, "SECRET");
       
        
        req.body = {...req.body,id, email}

        next()

    } catch (error) {
        console.log(error);
       res.status(404).send({message: "Access denied"}) 
    }
}

module.exports = auth;