import { configureStore } from "@reduxjs/toolkit";
import postReducer  from "./Posts/postSlice";
import ClientsReducer from "./Posts/Register";
import  answerSliceReducer from "./Posts/AnswerSlice";
import  CommentsSliceReducer from "./Posts/Comments"


const store= configureStore({
    reducer: {
        posts: postReducer,
        Clients: ClientsReducer,
        Answers: answerSliceReducer,
        Comments: CommentsSliceReducer
    }
})

export default store;