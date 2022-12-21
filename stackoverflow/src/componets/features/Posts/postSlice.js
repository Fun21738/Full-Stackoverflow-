import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { PostQuestions,deleteQuestion,getQuestion } from "../../../Services/questions";

const initialState = {
    Quizes : [],
    loading:false
};
const url= `http://localhost:4000/questions/addquiz`
// const save=     sessionStorage.getItem("Clients".token);

export const createNewPost = createAsyncThunk('posts/createNewPost',
    async (data,thunkAPI) => {
        
        try {
            // console.log(data);
            const Token = localStorage.getItem("Clients");
            // console.log("jose",Token)
          const response=  await axios.post(url,data,{
            headers:{
                Authorization: `Bearer ${Token}`
            }
          }).then(data=>data.json());
          console.log(data);
 
            // const response=await PostQuestions(question)
           console.log(response);
          return{}
        } catch (error) {
            thunkAPI.rejectWithValue({
                error:error.message
            })
        }
    }
);





export const fetchPosts = createAsyncThunk('posts/fetchPosts', 
    async (question,thunkAPI) => {
        try {
            const res= await axios.get('http://localhost:4000/questions/quiz');
            
            // const  questions  = res.data;
            // console.log(res.data);
         return res.data
       } catch (error) {
        thunkAPI.rejectWithValue({
                error:error.message
            })
        }
    }
);

export const deleteQuestionAction= createAsyncThunk(
    "delete/question-one",
    async(question, thunkAPI)=>{
        try {
            const response = await (question)
            return response
        } catch (error) {
            thunkAPI.rejectWithValue({
                error: error.message
            })
        }
    }
)


export const postSlice = createSlice({
    name: 'Question',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(createNewPost.fulfilled, (state, action) => {
            // state.Quizes = action.payload
            // console.log(action.payload);
            state.loading =false
         });
         builder.addCase(createNewPost.pending, (state, action) => {
            state.loading =true
            
          });

          builder.addCase(fetchPosts.pending,(state,action)=>{
            
            state.loading=true
           }) 
       builder.addCase(fetchPosts.fulfilled, (state, action) => {
        // console.log(action.payload.Quizes);
          state.Quizes = action.payload.questions
          state.loading =false
         
       });
       
    }
});

export default postSlice.reducer;