const express=require('express')
const dotenv= require('dotenv')
const questionRoutes= require("./routes/questions")
const AnswersRoutes= require("./routes/Answers")
const CommentsRoutes= require("./routes/Comments")
const AskedQuestionsRoutes= require("./routes/AskedQuestions")
const cors= require('cors')


const app= express()

dotenv.config()
app.use(cors())
app.use(express.json())

app.use("/Questions", questionRoutes)
app.use("/Answers", AnswersRoutes)
app.use("/Comments", CommentsRoutes)
app.use("/AskedQuetions", AskedQuestionsRoutes)


app.listen(process.env.PORT|| 4000, ()=>{
    console.log(`server is running ${process.env.PORT}`);
})