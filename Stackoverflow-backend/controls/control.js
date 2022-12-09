const mssql =require("mssql")
const sqlConfig= require("../config/index")

const getQuestions = async (req, res)=>{
    try {
        //connect to the database
        const pool= await mssql.coonect(sqlConfig)
        const response= await pool.request().execute("getQuestions")
        const Questions = response.recordset()
        // if empty
        if(Questions){
          return  res.status(200).json(Questions)
        } else{
            res.status(404).json({
                message: ('no questions found')
            })
        }
        // res.status(202).json()
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}



const addQuestion =(req, res)=>{
    try {
        
    } catch (error) {
        
    }
}

const deleteQuestions= (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}

const getAnswers= (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}

const addAnswers= (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}

const addComments= (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}

const getComments= (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}

const getAskedQuiz = (req, res)=>{
    try {
        
    } catch (error) {
        
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

