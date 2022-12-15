import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import { useSelector } from "react-redux";
import { useState} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PostAnswer from "./PostAnswer";
// import PostComments from "./PostComments";
import { RiHeart3Line } from "react-icons/ri";
import { HiThumbDown } from "react-icons/hi";
// import { FaRegCommentDots } from "react-icons/fa";
import { fetchPosts } from "../features/Posts/postSlice";
import PostComments from "./PostComments";
//  import { stringify } from "uuid";

function Home() {
  const posts = useSelector((state) => state.posts.posts);
  console.log({ posts });
  const dispatch = useDispatch();
  const [OpenModal, setOpenModal] = useState(false);
  const [OpenCommentModal,setOpenCommentModal]= useState(false)
// const [like,setLike] = useState (false);
// const [Dislike,setDislike] = useState (false);

// const [likeActive,setLikeActive] = useState (false);
// const [DislikeActive,setDislikeActive] = useState (false);


  const answers = useSelector((state) => state.posts.posts);
  
  console.log({ posts });
  console.log(answers);
  const [checked, setChecked] = React.useState(false);
//   const LikePost = (id) => {
//     fetch('/Likes',{
//     method :"put",
//     headers:{
//       "context-type":"application/json",
//       "Authorization":"Bearer"+LocalStorage.getItems("jwt")
//     },
//     body:JSON>stringify({
//       postId:id
//     }).then(res=>res.json())
//     .then(result=>{
//         console.log(result);
//     })
// })

// const dislikePost = (id) => {
//   fetch('/Dislikes',{
//   method :"put",
//   headers:{
//     "context-type":"application/json",
//     "Authorization":"Bearer"+LocalStorage.getItems("jwt")
//   },
//   body:JSON>stringify({
//     postId:id
//   }).then(res=>res.json())
//   .then(result=>{
//       console.log(result);
//   })
// })
// 
//   // const { like } = useSelector((state) => state.like)

  // const handleCommentPost = (id) => {
  //   dispatch(CommentPost(id));
  // };

  // const handleDisikePost = (id) => {
  //   dispatch(dislikePostAction(id));
  // };

  // const handleLikePost = (id) => {
  //   dispatch(likePost(id));
  // };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="bp">
        
          <div className="mac">
            <h3 className="other">Others</h3>
            <Link to="/EveraskedQ" className="hp">
              {" "}
              Eversked Questions
              <span>{5}</span>
            </Link>
            <Link to="/Question" className="hp">
              Post a question
            </Link>
          </div>
  

        <div className="main">
          <h3 className="posty">Posted questions and answers !! </h3>

          {posts?.map((post) => {
            return (
              <div className="mag" key={post.id}>
                <div className="heady">
                  <h3 className="postee">posted question </h3>
                  <p className="posty">
                    answers <span>{post?.answers?.length}</span>
                  </p>
                </div>

                {post.quiz}
                <div className="anz">
                  <div className="mode">
                    <PostAnswer
                      post={post}
                      posts={posts}
                      open={OpenModal}
                      onClose={() => setOpenModal(false)}
                    />
                  </div>

                  <div className="ans">
                    {post.answers?.map((answers) => {
                      return (
                        <div className="ans" key={answers.id}>
                          <p className="answ">answer</p>
                          <h5>{answers}</h5>

                      <div className="lab">
                      <div className="ico">
                          <RiHeart3Line className="icon"/>
                           {/* onClick={()=>{Likepost(post.id)}} */}
                               {post?.like?.length}likes
                            <HiThumbDown className="icon" /><span>{11}</span>

                            
                            <PostComments 
                            className="icon" 
                             post={post}
                             posts={posts}
                             open={OpenCommentModal}
                             onClose={() => setOpenCommentModal(false)}
                            /> 
                            


                            <label>
                            <input
                            className="input"
                              type="checkbox"
                              defaultChecked={checked}
                              onChange={() => setChecked(!checked)}
                            />
                            Check Me!
                          </label>
                          </div>

                         
                      </div>
                         
                        </div>
                      );
                    })}
                <div className="comments">
                {post.comments?.map((comments) => {
return(
  <div className="ans" key={comments.id}>
    

    <h5>{comments}</h5>
    </div>
);
})}
                </div>


                  </div>

                
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
