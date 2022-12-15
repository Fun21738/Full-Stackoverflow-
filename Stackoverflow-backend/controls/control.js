const mssql =require("mssql")
const sqlConfig= require("../config/index")
const {v4} =require('uuid')

const getQuizes = async (req, res)=>{
    try {
        //create a coooenction btwn the database and the backend
        const pool = await mssql.connect(sqlConfig)
       const response= await pool.request().execute('getQuizes')
       //return data as record sets
       const questions= await response.recordset
       //if there are questions
       if(questions.length){
        return res.status(200).json({questions})
       } else{
        //if none
        res.status(404).json({
            message: "  no questions found"
        })
       }
    } catch (error) {
        console.log("sers");
        res.status(404).json({
            error: error.message
        })
    }
}


const addQusetion = async (req, res)=>{
    try {
       const {Clientsid,questions} =req.body
       const questionsid=v4

       const id =questionsid()
       const pool= await mssql.connect (sqlConfig)
    //    let questionsResult= await (
       await pool 
       .request()
       .input('id',mssql.VarChar,id)
       .input('Clientsid',mssql.VarChar,Clientsid)
       .input('questions',mssql.VarChar,questions)
       .execute ('addQuestion')
    //    ).recordset
       res.status(200).json({
        message: "question added successfully"
       })
              
    } catch (error) {
        
       res.status(404).json({
        message: error.message
        // message:"answers submitted failed"
       })
    }
}


const searchQuiz = async (req, res)=>{
    try {
       const {questions} =req.body
       const pool= await mssql.connect (sqlConfig)
       let searchResult= await (
       await pool 
       .request()
       .input('questions',mssql.VarChar,questions)
       .execute ('SearchQuiz')).recordset
       console.log(searchResult);
       res.status(200).json({searchResult})
              
    } catch (error) {
        
       res.status(404).json({
        message: error.message
        // message:"answers submitted failed"
       })
    }
}


const deleteQuestions= async (req, res)=>{
    try {
        const {id}= req.params
        const pool= await mssql.connect(sqlConfig)
        await pool
        .request()
        .input("id", mssql.VarChar, id)
        .execute('deleteQuestion')
        res.status(200).json({
            message: "question deleted successfully"
        }) 
    } catch (error) {
       res.status(400).json({
        // message: "cannot delete question"
        message: error.message
       })
    }
}

const getOpinions= async (req, res)=>{
    try {
        
        const pool= await mssql.connect(sqlConfig)
        const response= await pool.request().execute ("getOpinions")
        const Answers =response.recordset
        console.log(Answers);

        if (Answers.length){
            return res.status(200).json({Answers})
        }       
   } catch (error) {
    res.status(404).json({
        message: "answers not found"
    })

    }
}

const addAnswers= async (req, res)=>{
    try {
        const { Quizesid,Clientsid, comments, likes, dislikes}=req.body
        const answerId= v4
        //create a connection
        const id= answerId()
        const pool= await mssql.connect(sqlConfig)
        

         await pool
        .request()
        .input('id', mssql.VarChar, id)
        .input('Quizesid', mssql.VarChar, Quizesid)
        .input('Clientsid', mssql.VarChar, Clientsid)
        .input('comments', mssql.VarChar, comments)
        .input('likes', mssql.Int, likes)
        .input('dislikes', mssql.Int, dislikes)
        .execute('addAns').rowsaffected
        res.status(200).json({
            message: "answer submitted successfully"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const addComments=  async(req, res)=>{
    try {
        const {Clientsid,Opinionsid,Quizesid,reply} = req.body
        const replyid=v4

        console.log(req.body);
        const id= replyid()
        const pool =await mssql.connect (sqlConfig)

         await pool
        .request()
        .input ('id',mssql.VarChar,id)
        .input ('Clientsid',mssql.VarChar,Clientsid)
        .input ('Opinionsid',mssql.VarChar,Opinionsid)
        .input ('Quizesid',mssql.VarChar,Quizesid)
        .input ('reply',mssql.VarChar,reply)
        .execute ('addChats')
        
        res.status(200).json({
            message:"comment submitted successfully"
        })
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
    }
}

const getComments= async (req, res)=>{
    try {
        const pool = await mssql.connect(sqlConfig)
const response= await pool.request ().execute ("getChats")
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
    getQuizes,
    addQusetion,
    searchQuiz,
    deleteQuestions,
    getOpinions,
    addAnswers,
    addComments,
    getComments,
    getAskedQuiz,
       
}

