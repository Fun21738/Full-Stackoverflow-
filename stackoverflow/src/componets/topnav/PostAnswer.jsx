import React from 'react'
import { useDispatch } from "react-redux";
import  { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import { createNewAnswer } from "../features/Posts/AnswerSlice";
import { fetchAnswers } from "../features/Posts/AnswerSlice"; 
// import { useEffect } from 'react';

const PostAnswer = (onClose, post, posts)=> {
  console.log(post.id)
        
  const [AnswerForm, setAnswerForm] = useState("");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
 

  const handleSubmit = (e) => {
         e.preventDefault()
      dispatch(createNewAnswer({
        Quizesid: post.id,
        comments:AnswerForm,
        likes: 14,
        dislikes: 3
      }))
    
    //   setOpen(false);
    // dispatch(fetchPosts());
    // setAnswerForm("")
  }
  useEffect(()=>{
    if(post.id){
      dispatch(fetchAnswers(post.id))
    }
  //
  },[dispatch,post.id])
  
  const HandlerChange=(e)=>{
    setAnswerForm(e.target.value)
    // setAnswerForm((prev)=>({...prev, [e.target.name]: e.target.value}))
  }
  
  if(!open) return <>
    <div>
      <button className="btnn" onClick={()=>setOpen(true)}>post answer</button>
      <button className="btn">delete post</button>
      
    </div>
    
  </>



  return (
    <div>
      <button className="btn" onClick={()=>setOpen(true)}>post answer</button>
      <button className="btn">delete post</button>
      <div className='overLay' >
      <div className="modalCont">
      <p onClick={() => {setOpen(false)}}>X</p>
      <h4>posted answer</h4>
        <form  className="modal-form">
          <textarea name="answer" id="" cols="30" rows="10" placeholder='post your answer here' value={AnswerForm} onChange={HandlerChange} >
        </textarea>
        <button className='btn'onClick={handleSubmit} >Add</button>

        </form>
      </div>
    </div>
    </div>
    
  )

}
export default PostAnswer