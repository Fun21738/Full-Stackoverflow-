import React from 'react'
import { useDispatch } from "react-redux";
import "./Home.css";
import { useState } from "react";
import { createNewPost } from "../features/Posts/AnswerSlice";
import { fetchPosts } from "../features/Posts/postSlice";

const PostAnswer = ({onClose, post, posts})=> {
  
  
  const DEFAULT_INPUT={
    answer: ""
  }
  
  const [AnswerForm, setAnswerForm] = useState(DEFAULT_INPUT);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

 

  const handleSubmit = () => {
    setOpen(false);
    const id= Math.ceil(Math.random()*1000000)
    const newPost={...AnswerForm, id}
    const newQuestion = {
      ...post,
      answers: [...post.answers, newPost.answer],
    }
    dispatch(createNewPost({posts, newQuestion}))
    dispatch(fetchPosts());
  }
  
  const HandlerChange=(e)=>{
    setAnswerForm((prev)=>({...prev, [e.target.name]: e.target.value}))
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
          <textarea name="answer" id="" cols="30" rows="10" placeholder='post your answer here' value={AnswerForm.answer} onChange={HandlerChange} >
        </textarea>
        <button className='btn'onClick={handleSubmit} >Add</button>

        </form>
      </div>
    </div>
    </div>
    
  )

}
export default PostAnswer