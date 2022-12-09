const mssql =require("mssql")
const sqlConfig= require("../config/index")
const {v4} =require('uuid')

const getQuestions = async (req, res)=>{
    try {
        //create a coooenction btwn the database and the backend
        const pool = await mssql.connect(sqlConfig)
       const response= await pool.request().execute('getQuestions')
       //return data as record sets
       const questions= await response.recordset
       //if there are questions
       if(questions.length){
        return res.status(200).json(questions)
       } else{
        //if none
        res.status(404).json({
            message: " hey no questions found"
        })
       }
    } catch (error) {
        console.log("sers");
        res.status(404).json({
            error: error.message
        })
    }
}


const addQuestion = async (req, res)=>{
    try {
       const {userid,questions} =req.body
       const questionsid=v4

       const id =questionsid()
       const pool= await mssql.connect (sqlConfig)
       
       await pool 
       .request()
       .input('id',mssql.VarChar,id)
       .input('userid',mssql.VarChar,userid)
       .input('questions',mssql.VarChar,questions)
       .execute ('addquestion')
       res.status(200).json({
        message: "Question submitted succesfully"
       })
              
    } catch (error) {
       res.status(404).json({
        message:"answers submitted failed"
       })
    }
}

const deleteQuestions= (req, res)=>{
    try {

        
    } catch (error) {
       
    }
}

const getAnswers= async (req, res)=>{
    try {
        const pool= await mssql.connect(sqlConfig)
        const response= await pool.request ().execute ("getAnswers")
        const Answers =response.recordset
        console.log(Answers);

        if (Answers.length){
            return res.status(200).json(Answers)
        } else {
            res.status(404).json({
                error:error.message
            })
        }   
        
    } catch (error) {
        res.status(404).json({
            error:error.message
        })  
    }
}

const addAnswers= async (req, res)=>{
    try {
        const { questionid,userid, answers, likes, dislikes}=req.body
        const answerId= v4
        //create a connection
        const id= answerId()
        const pool= await mssql.connect(sqlConfig)
        
        await pool
        .request()
        .input('id', mssql.VarChar, id)
        .input('questionid', mssql.VarChar, questionid)
        .input('username', mssql.VarChar, username)
        .input('userid', mssql.VarChar, userid)
        .input('answers', mssql.VarChar, answers)
        .input('likes', mssql.Int, likes)
        .input('dislikes', mssql.Int, dislikes)
        .execute('insertanswers').rowsaffected
        res.status(200).json({
            message: "answer submitted successfully"
        })
    } catch (error) {
        res.status(404).json({
            message: "answer not submitted"
        })
    }
}

const addComments=  async(req, res)=>{
    try {
        const {userid,comments,answersid} = req.body
        const commentsid=v4

        const id= commentsid()
        const pool =await mssql.connect (sqlConfig)

         await pool
        .request()
        .input ('id',mssql.VarChar,id)
        .input ('userid',mssql.VarChar,userid)
        .input ('answersid',mssql.VarChar,answersid)
        .input ('comments',mssql.VarChar,comments)
        .execute ('addComments')
        res.status(200).json({
            message:"comment submitted successfully"
        })
    } catch (error) {
        res.status(404).json({
            message:"comments submitted failed"
        })
    }
}

const getComments= async (req, res)=>{
    try {
        const pool = await mssql.connect(sqlConfig)
const response= await pool.request ().execute ("getComments")
const Comments =response.recordset

  if (Comments.length){
            return res.status(200).json(Comments)
        } else {
            res.status(404).json({
                error:error.message
            })
        }
        } catch (error) {
            res.status(404).json({
                error:error.message
            }) 
}
}

const getAskedQuiz = async (req, res)=>{
    try {
        const pool = await mssql .connect (sqlConfig)
        const response =await pool.request () .execute ("GetAskedQuiz")
        const AskedQuiz =response.recordset ()

        if (AskedQuiz){
            return res.status(200).json(AskedQuiz)
        } else{
            res.status(404).json({
                error:error.message
            })
        
    }
    } catch (error) {
      res.status(404).json({
        error:error.message
      })
    }

}

module.exports= {
    getQuestions,
    addQuestion,
    deleteQuestions,
    getAnswers,
    addAnswers,
    addComments,
    getComments,
    getAskedQuiz
}

