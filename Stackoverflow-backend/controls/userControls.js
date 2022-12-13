const mssql =require("mssql")
const sqlConfig= require("../config/index")
const {v4} =require('uuid')
const bcrypt = require ('bcrypt')
const jwt =require ('jsonwebtoken')
const signupSchema = require("../Schemas/SingupSchema")
const LoginSchema = require("../Schemas/LoginSchema")


const signup =async (req, res)=>{
    try {

        const { error } = signupSchema.validate(req.body);
        if(error){
            return res.status(400).json({
                message: "wrong credentials"
            })
        }

     const {username,email} =req.body
      const userid =v4     

      const pool =await mssql.connect (sqlConfig)
      const id = userid()

       const salt = await bcrypt.genSalt(10)
        const password=await bcrypt.hash( req.body.password, salt)
        
        let signup = await (await pool
      .request()
      .input ('id',mssql.VarChar,id)
      .input ('username',mssql.VarChar,username)
      .input ('email',mssql.VarChar,email)
      .input ('password',mssql.VarChar,password)
      // .input ('confrim',mssql.VarChar,confirm)
      .execute('adduser')).rowsAffected
      console.log(signup);
      res.status (200).json({
        message:"signup successfully"
      })
    } catch (error) {
      console.log(error);
       res. status (404).json({
        message:"signup failed"
      })
    }
}


const addLogin =async (req, res)=>{
    try {

      const {error}= LoginSchema.validate(req.body)
      if(error){
        res.status(400).json({
          message: "wrong credentials"
        })
      }

     const {username,email,password} =req.body
      const userid =v4  
      const pool =await mssql.connect (sqlConfig)

      const id = userid()

      await pool
      .request()
      .input ('id',mssql.VarChar,id)
      .input ('username',mssql.VarChar,username)
      .input ('email',mssql.VarChar,email)
      .input ('password',mssql.VarChar,password)
      .execute('addLogin')

      //create a token
      const token= await jwt.sign({id, email}, "SECRET", {
        expiresIn: "24hrs"
    });

    res.status(201).send({
        user: {id, username, email}, token })

           
    } catch (error) {
       res. status (404).json({
        message:error.message
      })
    }
}


module.exports= {
    signup,
    addLogin
}
