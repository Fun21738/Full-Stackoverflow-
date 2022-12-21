// import React from "react";
import Navbar from "../topnav/Navbar";
import { useDispatch } from "react-redux";
import "./Sidenav.css";
// import { useSelector } from "react-redux";
import { createNewPost } from "../features/Posts/postSlice";
import { useState } from "react";
// import { useParams } from "react-router-dom";


// const DEFAULT_FORM={
//   quiz: ""
// }


const Question = () => {
 
  // const initialValue = {quiz:""}
  const [QuestionForm, setQuestionForm] = useState("");
  const dispatch = useDispatch();
  // const {quizId} = useParams()

// const answers=["sample answer"]

const handleAddPost=(e)=>{
  // const newQuestion= {...QuestionForm}
  e.preventDefault()
  console.log(QuestionForm);
   dispatch(createNewPost({questions:QuestionForm}))
   setQuestionForm("")
}

const HandlerChange=(e)=>{
  setQuestionForm(e.target.value)
}

  return (
    <div>
      <Navbar />
      <div className="qiuz">
        <h3 className="que">post a question</h3>
        <textarea name="quiz" id="" cols="30" 
          className="tex"
          placeholder="please input your question here"
          value={QuestionForm}
          onChange={HandlerChange}
          // onChange={(e) =>
          //    setQuestion(e.target.value)}
         ></textarea>
        
        <button className="btn" onClick={handleAddPost}>Post it</button>
        
      </div>
    </div>
  );
};

export default Question;


