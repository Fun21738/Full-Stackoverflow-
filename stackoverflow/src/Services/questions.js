// import axios from "axios"


// const PostQuizUrl= `http://localhost:4000/questions/addquiz`
// const getQuiz= `http://localhost:4000/questions/quiz`
// const deleteQuestionURL = `http://localhost:4000/questions/id`


// export const PostQuestions = async (question)=>{
//     const Clients= JSON.parse(sessionStorage.getItem('Clients'))
//     if(Clients.token){
//         console.log(Clients.token);
//         return await axios.post(PostQuizUrl, question,{ headers:{authorization:`Bearer ${Clients.token}`}})     
//     }
// }

// export const getQuestion = async (question)=>{
//     const response = await axios.get(`${getQuiz}`)
//     console.log(response);
//     return response
// }

// export const deleteQuestion = async(id)=>{
//     const response =await axios.delete(`${deleteQuestionURL}/${id}`)
//     return response
// }