import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./Home.css";
// import { CommentPost, likePost, dislikePostAction } from "../Actions/Actions";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PostAnswer from "./PostAnswer";
import { RiHeart3Line } from "react-icons/ri";
import { HiThumbDown } from "react-icons/hi";
import { FaRegCommentDots } from "react-icons/fa";
import { fetchPosts } from "../features/Posts/postSlice";

function Home() {
  const posts = useSelector((state) => state.posts.posts);
  console.log({ posts });
  const dispatch = useDispatch();
  const [OpenModal, setOpenModal] = useState(false);

  const answers = useSelector((state) => state.posts.posts);
  
  console.log({ posts });
  console.log(answers);
  const [checked, setChecked] = React.useState(false);

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
        <div className="side">
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
                <div className="icons">
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
                          <p>answers</p>
                          <h5>{answers}</h5>

                      <div className="lab">
                      <div className="ico">
                          <RiHeart3Line className="icon"/>
                            <HiThumbDown className="icon"/>
                            <FaRegCommentDots className="icon"/>
                          </div>

                          <label>
                            <input
                              type="checkbox"
                              defaultChecked={checked}
                              onChange={() => setChecked(!checked)}
                            />
                            Check Me!
                          </label>
                      </div>
                         
                        </div>
                      );
                    })}
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
