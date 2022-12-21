import { useEffect } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PostAnswer from "./PostAnswer";
// import PostComments from "./PostComments";
import { RiHeart3Line } from "react-icons/ri";
import { HiThumbDown } from "react-icons/hi";
// import { FaRegCommentDots } from "react-icons/fa";
import { fetchPosts,createNewPost } from "../features/Posts/postSlice";
// import { createNewAnswer, fetchAnswers } from "../features/Posts/AnswerSlice";
import PostComments from "./PostComments";

//  import { stringify } from "uuid";

function Home() {
  const { Quizes}  = useSelector((state) => state.posts);
  console.log("ff",Quizes)
  // console.log( {posts });
  const dispatch = useDispatch();
  const [OpenModal, setOpenModal] = useState(false);
  const [OpenCommentModal, setOpenCommentModal] = useState(false);

  const Answers = useSelector((state) => state.Answers);
  console.log(Answers);
  // console.log(answers);
  const [checked, setChecked] = useState(false);


  useEffect(()=>{
        dispatch(fetchPosts())
   }, [dispatch])




  
  return (
    <div>
      <Navbar />
      {<div className="bp">
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
          <div>
          <h3 className="posty">Posted questions and answers !! </h3>
          </div>
          

          {Quizes?.map((post) => {
            return (
              <div className="mag" key={post.id}>
                <div className="heady">
                  <h3 className="postee">posted question </h3>
                  <p className="posty">
                    answers <span>{post?.answers?.length}</span>
                  </p>
                </div>

                {post.questions}
                <div className="anz">
                  <div className="mode">
                    <PostAnswer
                      post={post}
                      posts={Quizes}
                      open={OpenModal}
                      onClose={() => setOpenModal(false)}
                    />
                  </div>

                  <div className="ans">
                    {Answers.answers?.map((answers) => {
                      return (
                        <div className="ans" key={answers.id}>
                          <p className="answ">answer</p>
                          <h5>{answers}</h5>

                          <div className="lab">
                            <div className="ico">
                              <RiHeart3Line className="icon" />
                             
                              {post?.like?.length}
                              <HiThumbDown className="icon" />
                              <span>{11}</span>
                              <PostComments
                                className="icon"
                                post={post}
                                posts={Answers}
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
                        return (
                          <div className="ans" key={comments.id}>
                            hello
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
        </div>}
    </div>
  );
}

export default Home;
