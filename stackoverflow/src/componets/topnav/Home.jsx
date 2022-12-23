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
import { fetchPosts } from "../features/Posts/postSlice";
// import { createNewAnswer, fetchAnswers } from "../features/Posts/AnswerSlice";
import PostComments from "./PostComments";
import { fetchAnswers } from "../features/Posts/AnswerSlice"; 
import QuestionCard from "../Questions/QuestionCard";

//  import { stringify } from "uuid";

function Home() {
  const { Quizes}  = useSelector((state) => state.posts);
  console.log("",Quizes)
  // console.log( {posts });
  const dispatch = useDispatch();
  const [OpenModal, setOpenModal] = useState(false);
  const [OpenCommentModal, setOpenCommentModal] = useState(false);
  const [selectedQuizes,setSelectedQuiz] = useState('');
  const [show, setShow] = useState(false);
  
  // const handleAnswers = (id) => {
  //   setShow(!show);
  //   dispatch(fetchAnswers(id));
  //   setSelectedQuiz(id);
  // }

  const Answers = useSelector((state) => state.Answers);
  // console.log(Answers);
  // console.log(answers);
  // const [checked, setChecked] = useState(false);


  useEffect(()=>{
        dispatch(fetchPosts())
   }, [dispatch])

  //  useEffect(() => {
  //   if (selectedQuizes )
  //  })




  
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
            console.log(post)
            return (
              // <div>Testing</div>
              <QuestionCard post={post} />
              
            );
          })}
        </div>
        </div>}
    </div>
  );
}

export default Home;
