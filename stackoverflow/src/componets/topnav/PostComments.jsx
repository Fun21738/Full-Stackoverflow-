import React from 'react'
import { useDispatch } from "react-redux";
import "./Home.css";
import { useState } from "react";
import { createNewPost } from "../features/Posts/Comments";
import { fetchPosts } from "../features/Posts/postSlice";
import { FaRegCommentDots } from "react-icons/fa";

const PostComments = ({onClose, post, posts})=> {
  
  
  const DEFAULT_INPUT={
    Comment: ""
  }
  
  const [CommentForm, setCommentForm] = useState(DEFAULT_INPUT);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

 

  const handleSubmit = () => {
    setOpen(false);
    const id= Math.ceil(Math.random()*1000000)
    const newPost={...CommentForm, id}
    const newAnswers = {
      ...post,
      Comment: [...post.Comment, newPost.Comment],
    }
    dispatch(createNewPost({posts, newAnswers}))
    dispatch(fetchPosts());
  }
  
  const HandlerChange=(e)=>{
    setCommentForm((prev)=>({...prev, [e.target.name]: e.target.value}))
  }
  
  if(!open) return (
   <>
    <div>
          <FaRegCommentDots onClick={()=>setOpen(true)}/>
    </div>
    
  </>
  )



  return (
    <div>
      <div className='overLay' >
      <div className="modalCont">
      <p onClick={() => {setOpen(false)}}>X</p>
      <h4>posted Comment</h4>
        <form  className="modal-form">
          <textarea name="Comment" id="" cols="30" rows="10" placeholder='post your answer here' value={CommentForm.answer} onChange={HandlerChange} >
        </textarea>
        <button className='btn'onClick={handleSubmit} >Add</button>

        </form>
      </div>
    </div>
    </div>
    
  )

}
export default PostComments