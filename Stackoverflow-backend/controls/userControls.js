const mssql =require("mssql")
const sqlConfig= require("../config/index")
const {v4} =require('uuid')
const bcrypt = require ('bcrypt')
const jwt =require ('jsonwebtoken')
const signupSchema = require("../Schemas/SingupSchema")
const LoginSchema = require("../Schemas/LoginSchema")


const signup =async (req, res)=>{
    try {
     const {username,email,confirm} =req.body
     console.log(req.body);
      const Clientsid =v4   
      const { error } = signupSchema.validate(req.body);
        console.log(error);
        if(error){
            return res.status(404).json({
                message: "wrong credentials"
            })
        }  

      const pool = await mssql.connect(sqlConfig)
      const id = Clientsid()

       const salt = await bcrypt.genSalt(10)
        const password=await bcrypt.hash( req.body.password, salt)
        
        let signup = await (await pool
      .request()
      .input ('id',mssql.VarChar,id)
      .input ('username',mssql.VarChar,username)
      .input ('email',mssql.VarChar,email)
      .input ('password',mssql.VarChar,password)
      .input ('confirm',mssql.VarChar,confirm)
      .execute('addClient')).rowsAffected
      console.log(signup);
      res.status (200).json({
        message:"signup successfully"
      })
    } catch (error) {
      console.log(error);
       res. status (404).json({
        // message:"signup failed"
        message: error.message
      })
    }
}


const addLogin =async (req, res)=>{
    try {

      // const {error}= LoginSchema.validate(req.body)
      // if(error){
      //   res.status(400).json({
      //     message: "bad credentials"
      //   })
      // }

     const {email,passwor} =req.body
     
      console.log(passwor); 
          const pool =await mssql.connect (sqlConfig)
          
let getRusult =await( await pool
  
      .request()
        .input ('email',mssql.VarChar,email)
        // .input ('passwor',mssql.VarChar,passwor)
      .execute('checkLogins')).recordset[0]
console.log(getRusult );
const { id, username, password } = getRusult;
// const {id} = getRusult
// const {username} =getRusult
// const {email}=getRusult
// const {password} =getRusult
// const {confirm} =getRusult
// compare passwords singup and login
const validPassword = await bcrypt.compare(passwor, password)
        if(!validPassword){
    return res.status(400).json({
        message: 'bad credentials'
    })
}
      //create a token
      const token= await jwt.sign({id, email }, "SECRET", {
        expiresIn: "48hrs"
    });

    res.status(201).send({
        user: {id, username, email}, token })
          
    } catch (error) {
       res. status (404).json({
        message:error.message
      })
    }
}
const getUserById = async(req, res)=>{
  try {
    let {id} = req.body
    console.log(req.body);
    const pool = await mssql.connect(sqlConfig)
    let Client= await (await pool
      .request()
      .input('id', mssql.VarChar, id)

      .execute('getUserById')).recordset[0]
      console.log(Client);
      if(Client){
      
        res.status(200).send({
          Client: {id:Client.id, username:Client.username}
        })
      }
      else{
        res.status(404).json({
            error:error.message
        })
    
}
  } catch (error) {
   res.status(404).json({
    message:error.message
   })

  } 
}

module.exports= {
    signup,
    addLogin,
    getUserById
}
