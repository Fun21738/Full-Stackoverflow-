import React from 'react'
import { useDispatch } from "react-redux";
import "./Home.css";
import { useState } from "react";
import { createNewComments  } from "../features/Posts/Comments";
import { FaRegCommentDots } from "react-icons/fa";

const PostComments = ({onClose, answer, posts})=> {
  console.log(answer.id)
  
  
  // const DEFAULT_INPUT={
  //   Comment: ""
  // }
  const [CommentForm,setCommentForm] = useState ("");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

 

  const handleSubmit = (e) => {
    setOpen(false);
  e.preventDefault()
    dispatch(createNewComments ({
      Opinionsid: answer.id,
      reply:CommentForm
    }))
        
  }
  
  const HandlerChange=(e)=>{
    setCommentForm(e.target.value)
    // setCommentForm((prev)=>({...prev, [e.target.name]: e.target.value}))
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
          <textarea name="Comment" id="" cols="30" rows="10" placeholder='post your answer here' value={CommentForm} onChange={HandlerChange} >
        </textarea>
        <button className='btn'onClick={handleSubmit} >Add</button>

        </form>
      </div>
    </div>
    </div>
    
  )

}
export default PostComments