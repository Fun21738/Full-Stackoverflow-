import { configureStore } from "@reduxjs/toolkit";
import postReducer  from "./Posts/postSlice";
import ClientsReducer from "./Posts/Register";
import  answerSliceReducer from "./Posts/AnswerSlice"


const store= configureStore({
    reducer: {
        posts: postReducer,
        Clients: ClientsReducer,
        Answers: answerSliceReducer
    }
})

export default store;