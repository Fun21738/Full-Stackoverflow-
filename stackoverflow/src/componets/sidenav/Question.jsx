// import React from "react";
import Navbar from "../topnav/Navbar";
import { useDispatch } from "react-redux";
import "./Sidenav.css";
// import { useSelector } from "react-redux";
import { createNewPost } from "../features/Posts/postSlice";
import { useState } from "react";

const DEFAULT_FORM={
  quiz: ""
}


const Question = () => {
  const [QuestionForm, setQuestionForm] = useState(DEFAULT_FORM);
  const dispatch = useDispatch();

//   const handleAddPost = () => {
//     // const id = Math.floor(Math.random() * 136736723);
//     // dispatch(createPostAction({ Question, id, likes: 0 }));
//     dispatch(createNewPost({ }))

//     // setQuestion("");
    
// };
const answers=["sample answer"]

const handleAddPost=(e)=>{
  e.preventDefault()
  const id= Math.ceil(Math.random()*1000000)
  // const newPost={...QuestionForm, id, answers: []};
  const { quiz } = QuestionForm;
  // console.log(newPost)
  dispatch(createNewPost({ id, quiz, answers}))
  // dispatch(fetchPosts())
}


const HandlerChange=(e)=>{
  setQuestionForm((prev)=>({...prev, [e.target.name]: e.target.value}))
}

  return (
    <div>
      <Navbar />
      <div className="qiuz">
        <h3 className="que">post a question</h3>
        <textarea name="quiz" id="" cols="30" 
          className="tex"
          placeholder="please input your question here"
          value={QuestionForm.quiz}
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
